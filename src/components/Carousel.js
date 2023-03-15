import React, { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import { BsArrowRight, BsArrowLeft } from "react-icons/all";

const Carousel = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const dataLength = data.length;
  let cardData = data[counter]?.data?.data?.cards;
  // useEffect(() => {
  //   console.log("data::", data);
  //   console.log("counter::", counter);
  //   console.log("test::", data[counter]);
  //   cardData = data[counter]?.data?.data?.cards;
  // }, [counter]);

  return (
    <div className="pl-5 bg-[#171a29] -mx-[120px]">
      <div className="w-[1200px] my-0 mx-auto h-[340px] flex flex-col justify-center">
        <div className="flex justify-center">
          {counter > 0 && (
            <button
              onClick={() => setCounter(counter - 1)}
              className="rounded-full bg-white h-10 w-10 px-[10px] cursor-pointer outline-0 relative top-1/2 -translate-y-1/2 -right-[18px] z-[1]"
            >
              <BsArrowLeft />
            </button>
          )}
          {cardData?.map((card, index) => {
            return <CarouselCard key={"carousel_" + index} data={card} />;
          })}
          {counter < dataLength - 1 && (
            <button
              onClick={() => setCounter(counter + 1)}
              className="rounded-full bg-white h-10 w-10 px-[10px] cursor-pointer outline-0 relative top-1/2 -translate-y-1/2 -left-[70px]"
            >
              <BsArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
