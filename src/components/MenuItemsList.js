import React, { useState } from "react";
import ItemCategory from "./ItemCategory";
import MenuVegFilter from "./MenuVegFilter";

const MenuItemsList = ({ data }) => {
  const [isVegFilter, setIsVegFilter] = useState(false);
  const filterHandler = (e) => {
    setIsVegFilter(e.target.checked);
  };
  return (
    <div className="max-w-[800px] bg-gray-100">
      {data?.map((card, i) => {
        const obj = card.card.card;
        if (
          obj["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
        ) {
          return (
            <MenuVegFilter
              key={"filter_" + i}
              data={obj}
              onfilter={filterHandler}
            />
          );
        } else if (
          obj["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return (
            <ItemCategory
              key={"itemCategory_" + i}
              data={obj}
              isVeg={isVegFilter}
            />
          );
        }
      })}
    </div>
  );
};

export default MenuItemsList;
