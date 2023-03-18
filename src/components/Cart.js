import { useSelector } from "react-redux";
import store from "../store";
import CartItem from "./CartItem";

const Cart = () => {
  const { items, restaurant } = useSelector((store) => store.cart);
  return (
    <div className="mt-20 flex justify-between mx-20 bg-[#E6E9EB]">
      <div className="bg-white m-5 flex-1">Account</div>
      <div className="flex flex-col p-5 bg-white m-6 min-h-[calc(100vh_-_200px)] min-w-[500px]">
        <div className="flex">
          <div>
            <img
              className="h-14 w-14"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/h7wbfbhtwsagfa4ecklk"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1 ml-3">
            <span className="text-xl font-semibold">{restaurant.name}</span>
            <span className="text-sm text-[#686b78]">
              {restaurant.areaName}
            </span>
          </div>
        </div>
        <div>
          {items?.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
