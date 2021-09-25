import axios from "axios";
import { useEffect, useState } from "react";
import { WilderType } from "../types/types";
import * as styled from "../../App.styled";
import blank_profile from "../images/blank-profile-picture-female.png";
import Skill from "./Skill";
import Loader from "../loader/Loader";

interface Props {
  match: any;
}

const WilderItem = (props: Props) => {
  const [wilder, setWilder] = useState<WilderType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOneWilder = async () => {
      const id = props.match.params._id;
      const apiUrl = `/wilders/${id}`;
      const response = await axios.get(apiUrl);

      setWilder(response.data.result);
      setLoading(false);
    };
    fetchOneWilder();
  }, [props.match.params._id]);

  return (
    <styled.Card>
      <img src={blank_profile} alt="Jane Doe Profile" />
      {loading && <Loader />}
      <h3>{wilder?.name}</h3>
      <h4>{wilder?.city}</h4>
      <p style={{ wordWrap: "break-word" }}>{wilder?.description}</p>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      <h4>Wild Skills</h4>
      <styled.SkillsList>
        {wilder?.skills.map((skill) => (
          <Skill key={skill.title} title={skill.title} votes={skill.votes} />
        ))}
      </styled.SkillsList>
    </styled.Card>
  );
};

export default WilderItem;
