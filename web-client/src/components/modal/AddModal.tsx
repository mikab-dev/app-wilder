import React, { useEffect, useState } from "react";
import * as styled from "../../App.styled";
import Modal from "react-modal";
import FormCreateWilder from "../form/FormCreateWilder";

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

const AddModal = ({ onSuccess }: { onSuccess: () => void }) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
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
          Add Wilder
        </styled.Button>
      </styled.DeleteContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Delete Wilder Modal"
      >
        <FormCreateWilder onSuccess={onSuccess} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default AddModal;
