import React from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";

const CarouselCard = ({ data }) => {
  return (
    <div className="mr-[50px] cursor-pointer inline-block">
      <Link to={`/collections/${data.data.link}?type=rcv2`}>
        <img
          className="h-[260] w-[260] hover:scale-105"
          alt="Test"
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${data.data.creativeId}`}
        />
      </Link>
    </div>
  );
};

export default CarouselCard;
