import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { OFFER_DATA } from "../constant";
import RestaurentCard from "../components/RestaurentCard";

const Offer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allrestaurants, setAllrestaurants] = useState([]);
  const [msgCard, setMsgCard] = useState([]);

  useEffect(() => {
    getOffersData();
  }, []);

  const getOffersData = async () => {
    setIsLoading(true);
    const data = await fetch(OFFER_DATA);
    const json = await data.json();
    const allRestaurant = json?.data?.cards.filter(
      (card) => card.cardType == "restaurant"
    );
    const allMsgCard = json?.data?.cards.filter(
      (card) => card.cardType == "messageCard"
    );
    setAllrestaurants(allRestaurant);
    setMsgCard(allMsgCard);
    setIsLoading(false);
  };

  return (
    <div className="mx-[70px]">
      <div className="mx-[50px]">
        <div className="bg-[#005062] -mx-[120px]">
          <div className="max-w-[1200px] mx-auto text-white h-[300px] flex items-center justify-between">
            <div>
              <div className="text-[50px] font-semibold">Offers for you</div>
              <div className="text-[22px] opacity-80">
                Explore top deals and offers exclusively for you!
              </div>
            </div>
            <div>
              <img
                className="h-52"
                alt=""
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-[#d4d5d9]">
          <div className="max-w-[1200px] mx-auto flex">
            <div
              className="text-[20px] pt-6 pb-5 text-[#93959f] ml-6 cursor-pointer"
              data-tab-id="restaurant"
              role="button"
              id="restaurant"
              aria-label="Open Restaurant offers tab"
            >
              Restaurant offers
            </div>
            <div
              className="text-[20px] pt-6 pb-5 text-[#93959f] ml-6 cursor-pointer"
              data-tab-id="payment"
              role="button"
              id="payment"
              aria-label="Open Payment offers/Coupons tab"
            >
              Payment offers/Coupons
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto my-0 pt-11">
          <div>
            <div>
              <div className="mb-[38px]">
                <div className="text-2xl mt-4 font-semibold">
                  All offers (948)
                </div>
                <div className="text-base mt-1 text-[#93959f]">
                  All offers and deals, from restaurants near you
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between"
            data-testid="rest-list"
          >
            {allrestaurants?.map((restaurant, i) => {
              return (
                <Link key={i} to={`/restaurant/${restaurant?.data?.data.id}`}>
                  <RestaurentCard {...restaurant?.data} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
