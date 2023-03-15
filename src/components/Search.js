import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Search = ({ onSerch }) => {
  const { user, setUser } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");

  const onTextChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="h-10 my-8 text-center">
      <input
        data-testid="search-input"
        type={"text"}
        placeholder={"Search"}
        value={searchText}
        onChange={onTextChangeHandler}
        className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
      />
      <button
        className="bg-purple-600 text-white rounded w-20 h-9 mx-3"
        onClick={() => onSerch(searchText)}
        data-testid="search-btn"
      >
        Search
      </button>
      <input
        type={"text"}
        placeholder={"Search"}
        value={user?.name}
        onChange={(e) => {
          setUser({
            name: e.target.value,
            email: e.target.value + "@suppoert.com",
          });
        }}
        className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
      />
    </div>
  );
};

export default Search;
