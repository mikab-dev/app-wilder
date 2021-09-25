import { LIST_SIZE } from "../../constants";
import { WilderType } from "../types/types";
import CreateWilder from "./CreateWilder";
import WilderItem from "./WilderItem";

const WildersList = ({
  list,
  deleteWilder,
  onSuccess,
}: {
  list: WilderType[];
  deleteWilder: (_id: string) => void;
  onSuccess: () => void;
}) => {
  const slicedList = list.slice(0, LIST_SIZE);
  console.log(list);

  return (
    <>
      {slicedList.map((wilder: any) => (
        <WilderItem
          key={wilder._id}
          _id={wilder._id}
          name={wilder.name}
          city={wilder.city}
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
