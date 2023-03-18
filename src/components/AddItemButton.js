import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../slice/cart";

const AddItemButton = ({ menu }) => {
  const dispatch = useDispatch();

  const onAddItemHandler = (item) => {
    dispatch(addItem(item));
  };

  const onRemoveItemHandler = (item) => {
    dispatch(removeItem(item.id));
  };
  return (
    <div>
      {menu.quantity == 0 ? (
        <button
          onClick={() => onAddItemHandler(menu)}
          className="text-green-500 bg-white border border-gray-300 p-2 h-9 w-20 text-sm font-semibold rounded-sm -mt-[18px]"
        >
          ADD
        </button>
      ) : (
        <div className="text-green-500 flex py-1 px-2 h-7 justify-between bg-white border border-gray-300 w-20 text-sm font-semibold rounded-sm">
          <button onClick={() => onRemoveItemHandler(menu)}>-</button>
          <span>{menu.quantity}</span>
          <button onClick={() => onAddItemHandler(menu)}>+</button>
        </div>
      )}
    </div>
  );
};

export default AddItemButton;
