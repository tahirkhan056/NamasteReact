import { useSelector } from "react-redux";
import store from "../store";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { items, restaurant } = useSelector((store) => store.cart);
  if (!items.length) {
    return <EmptyCart />;
  }

  const totalAmount =
    items.reduce((c, a) => {
      const itemPrice = a.price ? a.price : a.defaultPrice;
      return c + a.quantity * itemPrice;
    }, 0) / 100;

  const govTaxes = (totalAmount * 12) / 100;

  const toPayAmount = (totalAmount + govTaxes).toFixed(2);

  return (
    <div className="flex justify-between mx-20 bg-[#E6E9EB]">
      <div className="bg-white m-5 flex-1">Account</div>
      <div className="flex flex-col p-8 bg-white m-6 min-h-[calc(100vh_-_200px)] min-w-[500px]">
        <div className="flex mb-4">
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
        <div className="flex flex-col mt-10 text-sm">
          <div className="font-semibold py-2">{"Bill Details"}</div>
          <div className="flex justify-between border-b py-2 text-[#686b78] border-b-gray-100">
            <div>{"Item Total"}</div>
            <div>{"₹" + totalAmount}</div>
          </div>
          <div className="flex justify-between border-b-2 border-black py-2 text-[#686b78]">
            <div>{"Govt Taxes & Other Charges"}</div>
            <div>{"₹" + govTaxes}</div>
          </div>
          <div className="flex justify-between font-bold text-black py-4">
            <div>{"TO PAY"}</div>
            <div>{"₹" + toPayAmount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
