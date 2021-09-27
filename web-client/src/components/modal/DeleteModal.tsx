import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as styled from "../../App.styled";
import Modal from "react-modal";
import axios from "axios";

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

type Props = {
  name: string;
  _id: string;
  deleteWilder: (_id: string) => void;
};

const DeleteModal = ({ name, _id, deleteWilder }: Props) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const successfullWilderAdd = () => toast.success(`${name} delete success!`);

  const handleDelete = async (_id: string) => {
    await axios.delete(`wilders/${_id}`);
    deleteWilder(_id);
  };

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
    <>
      <styled.DeleteContainer>
        <styled.Button onClick={openModal} theme={theme}>
          X
        </styled.Button>
      </styled.DeleteContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Delete Wilder Modal"
      >
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
              handleDelete(_id);
              successfullWilderAdd();
              closeModal();
            }}
          >
            Oui
          </styled.Button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteModal;
