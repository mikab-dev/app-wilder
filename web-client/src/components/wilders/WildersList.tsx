import { useState } from "react";
import { LIST_SIZE } from "../../constants";
import { WilderType } from "../types/types";
import CreateWilder from "./CreateWilder";
import WilderItem from "./WilderItem";
import * as styled from "../../App.styled";

const WildersList = ({
  list,
  deleteWilder,
  onSuccess,
}: {
  list: WilderType[];
  deleteWilder: (_id: string) => void;
  onSuccess: () => void;
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const filteredList = list.filter((user) => [user.name].includes(searchTerm));
  // const userList = filteredList.map((user) => <p>{user}</p>);

  // const slicedList = list.slice(0, LIST_SIZE);
  // console.log(filteredList);
  // console.log(searchTerm);
  const handleChange = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <styled.Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      ></styled.Input>
      {list.map((wilder) => {
        if (
          searchTerm === "" ||
          wilder.name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return (
            <WilderItem
              key={wilder._id}
              _id={wilder._id}
              name={wilder.name}
              city={wilder.city}
              description={wilder.description}
              // skills={wilder.skills}
              deleteWilder={deleteWilder}
            />
          );
        }
        return <p>No wilder</p>;
      })}

      {/* {slicedList.map((wilder: any) => (
        <WilderItem
          key={wilder._id}
          _id={wilder._id}
          name={wilder.name}
          city={wilder.city}
          description={wilder.description}
          // skills={wilder.skills}
          deleteWilder={deleteWilder}
        />
      ))} */}
      <CreateWilder onSuccess={onSuccess} />
      <button>Next</button>
    </>
  );
};
export default WildersList;
