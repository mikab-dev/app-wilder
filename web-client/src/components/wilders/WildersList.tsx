import CreateWilder from "./CreateWilder";
import WilderItem from "./WilderItem";

import { WilderType } from "../types/types";

import { LIST_SIZE } from "../../constants";

const WildersList = ({
  list,
  filteredList,
  deleteWilder,
  onSuccess,
}: {
  list: WilderType[];
  filteredList: WilderType[];
  deleteWilder: (_id: string) => void;
  onSuccess: () => void;
}) => {
  const slicedList = list.slice(0, LIST_SIZE);

  return (
    <>
      {filteredList.length
        ? filteredList.map((wilder: WilderType) => (
            <WilderItem
              key={wilder._id}
              _id={wilder._id}
              city={wilder.city}
              name={wilder.name}
              description={wilder.description}
              // skills={wilder.skills}
              deleteWilder={deleteWilder}
            />
          ))
        : slicedList.map((wilder: WilderType) => (
            <WilderItem
              key={wilder._id}
              _id={wilder._id}
              city={wilder.city}
              name={wilder.name}
              description={wilder.description}
              // skills={wilder.skills}
              deleteWilder={deleteWilder}
            />
          ))}
      <CreateWilder onSuccess={onSuccess} />
      <button>Next</button>
    </>
  );
};
export default WildersList;
