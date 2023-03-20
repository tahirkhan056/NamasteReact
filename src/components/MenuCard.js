import { useState } from "react";
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constant";
import { addItem, removeItem } from "../slice/cart";

const MenuCard = ({ menu }) => {
  console.log("menu::", menu);
  const { isVeg, name, price, description, imageId, defaultPrice } = menu;
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const onAddItemHandler = (item) => {
    dispatch(addItem(item));
    setCounter((counter) => counter + 1);
  };

  const onRemoveItemHandler = (item) => {
    dispatch(removeItem(item.id));
    setCounter((counter) => counter - 1);
  };

  return (
    <div>
      <div className="py-5 flex border-b border-gray-300">
        <div className="flex-1 pr-5">
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
          <div className="text-base font-medium text-slate-700 break-words">
            {name}
          </div>
          <div className="text-sm text-slate-700 break-words">
            ₹{price ? price / 100 : defaultPrice / 100}
          </div>
          <div className="mt-3 text-sm text-gray-500">{description}</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-28 h-24 rounded-md" src={IMG_CDN_URL + imageId} />

          {counter == 0 ? (
            <button
              onClick={() => onAddItemHandler(menu)}
              className="text-green-500 bg-white border border-gray-300 p-2 h-9 w-20 text-sm font-semibold rounded-sm -mt-[18px]"
            >
              ADD
            </button>
          ) : (
            <div className="text-green-500 flex p-2 justify-between bg-white border border-gray-300 h-9 w-20 text-sm font-semibold rounded-sm -mt-[18px]">
              <button onClick={() => onRemoveItemHandler(menu)}>-</button>
              <span>{counter}</span>
              <button onClick={() => onAddItemHandler(menu)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
