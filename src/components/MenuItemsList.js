import React, { useState } from "react";
import ItemCategory from "./ItemCategory";
import MenuVegFilter from "./MenuVegFilter";
import { TiLocation } from "react-icons/all";

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
        } else if (
          obj["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
        ) {
          return (
            <div className="mx-4">
              <div className="flex justify-start w-full items-center  py-2 mt-3 border-b border-black">
                <div>
                  <img
                    className="h-8 w-16 mr-4"
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/${obj.imageId}`}
                  />
                </div>
                <div className="text-[#93959f] text-sm">
                  {obj.text.join(",")}
                </div>
              </div>
            </div>
          );
        } else if (
          obj["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
        ) {
          return (
            <div className="mx-4 mt-4 pb-40 text-[#93959f]">
              <div className="flex flex-col w-full">
                <div className="font-semibold">{obj.name}</div>
                <div>{`(Outlet:${obj.area})`}</div>
                <div className="text-xs mt-2">
                  <TiLocation className="inline-block" />
                  {obj.completeAddress}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MenuItemsList;
