import React, { FormEvent, useState } from "react";
import { ToastContainer, toast, ToastContent } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as styled from "../App.styled";
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

const AddWilder = ({ onSuccess }: { onSuccess: () => Promise<void> }) => {
  const [post, setPost] = useState<IPost>({
    name: "",
    city: "",
    description: "",
    // skills: [{ title: "", votes: 0 }],
  });

  const [status, setStatus] = useState<IStatus | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

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
      <styled.Button
        onClick={() => setShowForm(!showForm)}
        theme={{ bg: "#f76c6c", color: "#ececec" }}
      >
        {showForm ? "Masquer Formulaire" : "Afficher Formulaire"}
      </styled.Button>
      <br />
      {showForm && (
        <form onSubmit={submitForm}>
          <label>
            Nom :<br />
            <styled.Input
              type="text"
              name="name"
              placeholder="Type your name..."
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
              value={post.city}
              onChange={(e) => onChange(e)}
            />
          </label>
          {/* <label>
            Skills :<br />
            <styled.Input
              type="text"
              name="city"
              placeholder="Type your City..."
              value={post.skills.votes}
              onChange={(e) => onChange(e)}
            />
          </label> */}
          <br />
          <label>
            Description :<br />
            <textarea
              name="description"
              value={post.description}
              onChange={(e) => onChange(e)}
            >
              <div>Your description..... </div>
            </textarea>
          </label>
          <br />
          <styled.Button theme={theme} type="submit">
            Send
          </styled.Button>
          <br />
        </form>
      )}
      {status && <ToastContainer position="bottom-right" />}
    </styled.FormWrapper>
  );
};

export default AddWilder;
