import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/all";
import MenuCard from "./MenuCard";

const ItemCategory = ({ data, isVeg }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { itemCards, title } = data;

  const toggleSection = () => {
    setIsOpen((current) => !current);
  };
  return (
    <div className="w-full mb-4">
      <div
        className="flex justify-between bg-white pt-5 pb-4 text-lg font-bold px-4"
        role={"button"}
        onClick={toggleSection}
      >
        <div className="flex-1">{title + " (" + itemCards.length + ")"}</div>
        {isOpen ? (
          <button>
            <BiChevronUp className="text-3xl" />
          </button>
        ) : (
          <button>
            <BiChevronDown className="text-3xl" />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="bg-white">
          {itemCards.map((c, i) => {
            if (isVeg) {
              if (!c.card.info.isVeg) {
                return;
              }
            }
            return <MenuCard key={"menuCard_" + i} menu={c.card.info} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ItemCategory;
