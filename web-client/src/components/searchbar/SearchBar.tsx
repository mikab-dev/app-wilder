const SearchBar = ({
  searchTerm,
  submitSearchTerm,
}: {
  searchTerm: string;
  submitSearchTerm: (e: string) => void;
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => {
          submitSearchTerm(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
