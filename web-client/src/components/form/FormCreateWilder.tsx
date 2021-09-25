import React, { FormEvent, useState } from "react";
import { ToastContainer, toast, ToastContent } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as styled from "../../App.styled";
import axios from "axios";

interface IPost {
  name: string;
  city: string;
  description: string;
  // skills: [
  //   {
  //     title: string;
  //     votes: number;
  //   }
  // ];
}

interface IStatus {
  success: boolean;
  message: string;
}

const theme = {
  color: "#f76c6c",
  bg: "#ececec",
};

const FormCreateWilder = ({
  onSuccess,
  closeModal,
}: {
  onSuccess: () => void;
  closeModal: () => void;
}) => {
  const [post, setPost] = useState<IPost>({
    name: "",
    city: "",
    description: "",
    // skills: [{ title: "", votes: 0 }],
  });

  const [status, setStatus] = useState<IStatus | null>(null);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const successfullWilderAdd = () => toast.success("Wilder add success!");
  const unSuccessfullWilderAdd = (error: ToastContent) =>
    toast.error(`Oops, something went wrong : ${error}`);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = "/wilders";
    try {
      const { name, city, description } = post;
      await axios.post(url, { name, city, description });
      setStatus({
        success: true,
        message: "Wilder success add",
      });
      onSuccess();
      successfullWilderAdd();
      closeModal();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          unSuccessfullWilderAdd(error.response.data.result);
        }
      }
    }
  };

  return (
    <styled.FormWrapper>
      <br />
      <form onSubmit={submitForm}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <label>
            Nom :<br />
            <styled.Input
              type="text"
              name="name"
              placeholder="Type your name..."
              required
              value={post.name}
              onChange={(e) => onChange(e)}
            />
          </label>
          <br />
          <label>
            Ville :<br />
            <styled.Input
              type="text"
              name="city"
              placeholder="Type your City..."
              required
              value={post.city}
              onChange={(e) => onChange(e)}
            />
          </label>
        </div>
        <br />
        <label>
          Description :<br />
          <textarea
            name="description"
            value={post.description}
            cols={50}
            rows={25}
            onChange={(e) => onChange(e)}
          >
            <div>Your description..... </div>
          </textarea>
        </label>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <styled.Button theme={theme} onClick={closeModal}>
            Cancel
          </styled.Button>
          <styled.Button
            theme={{ bg: "#f76c6c", color: "#ececec" }}
            type="submit"
          >
            Send
          </styled.Button>
        </div>
      </form>
      {status && <ToastContainer position="bottom-right" />}
    </styled.FormWrapper>
  );
};

export default FormCreateWilder;
