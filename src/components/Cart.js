import { useSelector } from "react-redux";
import store from "../store";

const Cart = () => {
  const { items } = useSelector((store) => store.cart);
  return (
    <div>
      <div>Cart</div>
      <div>
        <ul>
          {items?.map((item) => {
            return <li>{item?.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
