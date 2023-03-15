import React from "react";

const SortFilterHeader = ({ restCount, sorts, updateShortBy, sortBy }) => {
  const onUpdateSortHandler = (e) => {
    const sortVal = e.target.getAttribute("value");
    console.log("sortVal:::", sortVal);
    updateShortBy(sortVal);
  };
  return (
    <div className="mx-5 pt-5">
      <div className="w-full border-b flex justify-between  my-5">
        <div className="flex-1">
          <h1 className="font-bold text-[28px]">{restCount} restaurants</h1>
        </div>
        <div className="flex">
          {sorts.map((sort) => {
            const key = sort.key;
            return (
              <div
                key={key}
                role="button"
                tabIndex="0"
                value={key}
                onClick={(e) => onUpdateSortHandler(e)}
                className={`inline-block ml-9 cursor-pointer font-light text-[#686b78] ${
                  sortBy == sort.key ? "border-b border-black" : ""
                }`}
              >
                {sort.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SortFilterHeader;
