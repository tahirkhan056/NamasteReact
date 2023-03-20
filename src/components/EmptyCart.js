import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh_-_80px)] text-center justify-center text-[#535665]">
      <div className="mb-4">
        <img
          className="w-72 mx-auto h-64"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="empty_cart"
        />
      </div>
      <div className="text-2xl font-bold mb-2">
        <span>{"Your cart is empty"}</span>
      </div>
      <div className="mb-8">
        <span className="text-sm">
          {"You can go to home page to view more restaurants"}
        </span>
      </div>
      <div className="mb-4">
        <Link to="/">
          <button className="p-2 text-white bg-blue-400">
            {"SEE RESTAURANTS NEAR YOU"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
