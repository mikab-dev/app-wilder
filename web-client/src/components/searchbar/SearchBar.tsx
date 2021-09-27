const SearchBar = ({
  searchTerm,
  setSearchTerm
}: {
  searchTerm: string;
  setSearchTerm: (e: any) => void;
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
