import { MouseEvent } from "react";

type Props = {
  searchTerm: string;
  orderedListByAsc: boolean;
  setSearchTerm: (e: string) => void;
  toggleOrderedList: (e: MouseEvent) => void;
};

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  toggleOrderedList,
  orderedListByAsc,
}: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></input>
      <button onClick={(e) => toggleOrderedList(e)}>
        {orderedListByAsc === true ? "Asc" : "Desc"}
      </button>
    </div>
  );
};

export default SearchBar;
