import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import Cart from "./Cart";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //Reading dynamic params.
  const params = useParams();
  const { resId } = params;

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="px-5 mt-20">
      <div className="h-60">
        <div className="bg-[#171a29] text-white h-60 -mx-5 px-5">
          <div className="table h-full table-fixed min-w-[1200px] max-w-[1200px] mx-auto">
            <div className="table-cell align-top w-64">
              <div className="translate-y-10">
                <img
                  className="h-40 w-64"
                  src={IMG_CDN_URL + restaurant.cloudinaryImageId}
                />
              </div>
            </div>
            <div className="px-12 table-cell align-middle">
              <span className="text-3xl  block">
                {restaurant.name + " (" + restaurant.id + ")"}
              </span>
              <span className="block opacity-70 text-sm">
                {restaurant.cuisines.join(", ")}
              </span>
              <span className="block opacity-70 text-sm">
                {restaurant.locality + ", " + restaurant.area}
              </span>
              <div className="flex mt-5">
                <div className="pr-9">
                  <span className="block text-base">
                    &#9733;
                    {restaurant.avgRatingString}
                  </span>
                  <span className="block text-xs mt-1">
                    {restaurant.totalRatingsString}
                  </span>
                </div>
                <div className="px-9 border-l border-r">
                  <span className="block text-base">
                    {restaurant.sla.slaString}
                  </span>
                  <span className="block text-xs mt-1">Delivery Time</span>
                </div>
                <div className="pl-9 block">
                  <span className="block text-base">
                    ₹ {restaurant.costForTwo / 100}
                  </span>
                  <span className="block text-xs mt-1">Cost for two</span>
                </div>
              </div>
              <h3></h3>
            </div>
            <div className="table-cell pt-[50px] pb-12 w-[298px]">
              <div className="border border-[#bec0c8] relative">
                <div className="text-xl font-medium bg-[#171a29] inline-block pr-[10px] pb-[10px] uppercase absolute -top-3 -left-1">
                  Offer
                </div>
                <div className="pt-8 pb-6 pl-6 pr-10">
                  <div className="flex leading-4 items-center">
                    <span className="before:content-['\2739'] text-2xl mr-3"></span>
                    <div className="text-sm">
                      {
                        restaurant.aggregatedDiscountInfo.descriptionList[0]
                          .meta
                      }
                    </div>
                  </div>
                  <div className="flex leading-4 items-center mt-4">
                    <span className="before:content-['\2739'] text-2xl mr-3"></span>
                    <div className="text-sm">
                      {
                        restaurant.aggregatedDiscountInfo.descriptionList[1]
                          .meta
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex max-w-[1200px] min-w-[1200px] my-0 mx-auto">
        <div className="flex w-[902px]">
          <div className="w-[245px] mr-4">
            {restaurant?.menu?.widgets.map((widget, index) => {
              return (
                <div key={index} className="text-right mr-4 my-2">
                  {widget.name}
                </div>
              );
            })}
          </div>
          <div className="grow w-[648px] pt-8 px-14 pb-24 border-l border-gray-300">
            <ul>
              {Object.values(restaurant?.menu?.items).map((item) => {
                return <MenuCard menu={item} key={item.id} />;
              })}
            </ul>
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default RestaurantMenu;
