import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import Modal from "react-modal";
import Skill, { SkillPropType } from "./Skill";
import { WilderType } from "../types/types";
import "react-toastify/dist/ReactToastify.css";

import * as styled from "../../App.styled";
import blank_profile from "../images/blank-profile-picture-female.png";
import UpdateWilder from "./UpdateWilder";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Wilder = ({
  name,
  city,
  description,
  skills,
  _id,
}: // handleDelete,
WilderType) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const successfullWilderAdd = () => toast.success(`${name} delete success!`);

  useEffect(() => {
    if (modalIsOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalIsOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const theme = {
    color: "#f76c6c",
    bg: "#ececec",
  };

  return (
    <styled.Card>
      <styled.DeleteContainer>
        <styled.Button onClick={openModal} theme={theme}>
          X
        </styled.Button>
      </styled.DeleteContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Delete Wilder Modal"
      >
        <>
          <p>
            Voulez-vous supprimer le wilder
            <span style={{ color: "red", fontWeight: "bold" }}> {name}</span> ?
          </p>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <styled.Button theme={theme} onClick={closeModal}>
              Non
            </styled.Button>
            <styled.Button
              theme={{ bg: "#f76c6c", color: "#ececec" }}
              onClick={() => {
                // handleDelete(_id);
                successfullWilderAdd();
                closeModal();
              }}
            >
              Oui
            </styled.Button>
          </div>
        </>
      </Modal>
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <h4>{city}</h4>
      <p style={{ wordWrap: "break-word" }}>{description}</p>
      <h4>Wild Skills</h4>
      <styled.SkillsList>
        {skills.map((skill) => (
          <Skill key={skill.title} title={skill.title} votes={skill.votes} />
        ))}
      </styled.SkillsList>
      <UpdateWilder wilderName={name} wilderCity={city} />
    </styled.Card>
  );
};

Wilder.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape(SkillPropType)),
};

export default Wilder;
