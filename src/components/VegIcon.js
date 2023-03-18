import React from "react";

const VegIcon = ({ isVeg }) => {
  return (
    <div>
      <div
        className={
          isVeg
            ? "h-4 w-4 border-2 border-green-600 p-[2px] mb-2"
            : "h-4 w-4 border-2 border-red-600 p-[2px] mb-2"
        }
      >
        <div
          className={
            isVeg
              ? "h-2 w-2 bg-green-600 rounded-full"
              : "h-2 w-2 bg-red-600 rounded-full"
          }
        ></div>
      </div>
    </div>
  );
};

export default VegIcon;
