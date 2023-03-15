import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constant";
import { addItem } from "../slice/cart";

const MenuCard = ({ menu }) => {
  const dispatch = useDispatch();
  const onAddItemHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="pt-6">
      <div className="p-5 flex m-2 border-b border-gray-300">
        <div className="flex-1">
          <div
            className={
              menu.isVeg
                ? "h-8 w-8 border-2 border-green-900 p-1"
                : "h-8 w-8 border-2 border-red-900 p-1"
            }
          >
            <div
              className={
                menu.isVeg
                  ? "h-5 w-5 bg-green-900 rounded-2xl"
                  : "h-5 w-5 bg-red-900 rounded-2xl"
              }
            ></div>
          </div>
          <div className="text-xl font-medium text-slate-700 break-words">
            {menu.name}
          </div>
          <div className="text-base text-slate-700 break-words">
            ₹{menu.price / 100}
          </div>
          <div className="mt-3 text-sm text-gray-500 font-thin">
            {menu.description}
          </div>
        </div>
        <div>
          <img
            className="w-28 h-24 rounded-md"
            src={IMG_CDN_URL + menu.cloudinaryImageId}
          />
          <button
            onClick={() => onAddItemHandler(menu)}
            className="text-green-500 bg-white border border-gray-300 p-2 h-9 w-20"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
