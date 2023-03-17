import React from "react";
import {
  GoStar,
  IoMdAlert,
  CgTimelapse,
  HiOutlineCurrencyRupee,
} from "react-icons/all";

const RestaurantDetailHead = ({ data }) => {
  const {
    name,
    cuisines,
    areaName,
    feeDetails,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    sla,
  } = data;
  return (
    <div className="mx-4">
      <div className="pt-4 mb-[18px] flex justify-between">
        <div className="inline-block mr-4">
          <div aria-hidden="true">
            <p className="text-2xl font-semibold text-[#282c3f] mb-2 capitalize">
              {name}
            </p>
            <p className="text-base text-[#7e808c] h-[calc(0.93rem_+_2px) overflow-hidden text-ellipsis mb-1 whitespace-nowrap">
              {cuisines.join(", ")}
            </p>
          </div>
          <div className="flex items-center h-4">
            <p className="text-base text-[#7e808c]">{areaName + ", "}</p>
            <p className="text-base text-[#7e808c]">
              {sla.lastMileTravelString}
            </p>
          </div>
        </div>
        <button className="border border-[#e9e9eb] shadow shadow-[#f9f9f9] rounded-md text-center p-2 max-w-[100px] float-right">
          <span className="text-[#3d9b6d] pb-[10px] border-b border-[#e9e9eb] font-bold mb-2 block">
            <span className="mr-1">
              <GoStar className="inline-block text-xl" />
            </span>
            <span className="relative top-[2px]">{avgRatingString}</span>
          </span>
          <span className="text-xs text-[#8b8d97] font-semibold">
            {totalRatingsString}
          </span>
        </button>
      </div>
      <ul>
        <li className="mb-[18px] text-[#7e808c] flex">
          <IoMdAlert className="text-lg text-orange-500 mt-1 mr-2" />
          <span>{feeDetails.message}</span>
        </li>
      </ul>
      <hr className="mb-3 border-b border-dashed border-[#1px dashed #d3d3d3]" />
      <div className="mb-[18px]">
        <ul className="text-[#3e4152] text-base font-bold list-none">
          <li className="mr-6 inline-block">
            <div>
              <CgTimelapse className="inline-block text-2xl mr-2" />
              <div className="inline-block relative top-[2px]">
                {sla.slaString}
              </div>
            </div>
          </li>
          <li className="mr-6 inline-block">
            <div>
              <HiOutlineCurrencyRupee className="inline-block text-2xl mr-2" />
              <div className="inline-block relative top-[2px]">
                {costForTwoMessage}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetailHead;
