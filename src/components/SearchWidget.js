import { FiSearch, RxCross2 } from "react-icons/all";

const SearchWidget = ({ onChange, searchText }) => {
  const onTextChangeHandler = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="my-8 text-center flex">
      <input
        data-testid="search-input"
        type={"text"}
        placeholder={"Search for restaurants and food"}
        value={searchText}
        onChange={onTextChangeHandler}
        className="w-full border border-gray-400 text-gray-900 rounded px-4 py-4 outline-none"
      />
      <div className="my-auto -mx-10 text-2xl text-gray-500">
        {searchText ? (
          <button onClick={() => onChange("")}>
            <RxCross2 />
          </button>
        ) : (
          <button>
            <FiSearch />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchWidget;
