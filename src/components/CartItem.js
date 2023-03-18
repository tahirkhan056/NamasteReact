import React from "react";
import AddItemButton from "./AddItemButton";
import VegIcon from "./VegIcon";

const CartItem = ({ item }) => {
  console.log("item::", item);
  return (
    <div className="flex justify-between min-w-[400px] py-2">
      <div className="flex justify-between items-center">
        <div className="mr-2 pt-2">
          <VegIcon isVeg={item.isVeg} />
        </div>
        <div className="text-sm">{item.name}</div>
      </div>
      <div className="flex justify-end items-center">
        <div>
          <AddItemButton menu={item} />
        </div>
        <div className="ml-2 text-sm w-20 text-end">
          {"₹" + (item.quantity * item.defaultPrice) / 100}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
