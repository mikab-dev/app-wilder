import { WilderType } from "../types/types";
import "react-toastify/dist/ReactToastify.css";

import * as styled from "../../App.styled";
import blank_profile from "../images/blank-profile-picture-female.png";
import { Link } from "react-router-dom";
import DeleteModal from "../modal/DeleteModal";

type WilderProps = Pick<WilderType, "name" | "city" | "description" | "_id"> & {
  deleteWilder: (_id: string) => void;
};
const WilderItem = ({
  name,
  city,
  description,
  _id,
  deleteWilder,
}: WilderProps) => {
  return (
    <>
      <styled.Card>
        <DeleteModal name={name} _id={_id} deleteWilder={deleteWilder} />
        <img src={blank_profile} alt="Jane Doe Profile" />
        <h3>{name}</h3>
        <h4>{city}</h4>
        <p style={{ wordWrap: "break-word" }}>
          {description.substring(0, 250)}...
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={`/wilders/${_id}`}>
            <styled.Button theme={{ bg: "#f76c6c", color: "#ececec" }}>
              More
            </styled.Button>
          </Link>
        </div>
      </styled.Card>
    </>
  );
};

export default WilderItem;
