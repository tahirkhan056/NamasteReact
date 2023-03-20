import { useEffect, useState } from "react";
import SearchOptions from "../components/SearchOptions";
import SearchWidget from "../components/SearchWidget";
import { SEARCH_RESULT_DATA } from "../constant";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const onChangeHandler = (txt) => {
    setSearchText(txt);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchResult();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchResult = async () => {
    const data = await fetch(SEARCH_RESULT_DATA + searchText);
    const json = await data.json();
    console.log("json::", json);
    setSearchResult(json?.data?.suggestions);
  };

  return (
    <div className="min-h-[calc(100vh_-_190px)] flex justify-center">
      <div className="min-w-[800px] max-w-[800px]">
        <SearchWidget onChange={onChangeHandler} searchText={searchText} />
        {!searchText && <SearchOptions onSelect={onChangeHandler} />}
        {searchText && (
          <div className="w-full">
            {searchResult?.map((res, i) => {
              return (
                <div
                  key={"result_" + i}
                  className="flex my-2 p-2 hover:bg-blue-50"
                >
                  <div>
                    <img
                      className="w-16 h-16 rounded-md mr-4"
                      src={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/" +
                        res.cloudinaryId
                      }
                    />
                  </div>
                  <div className="text-gray-500">
                    <div className="font-bold">{res.text}</div>
                    <div className="text-sm">{res.tagToDisplay}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
