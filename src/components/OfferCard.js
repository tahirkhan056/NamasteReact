import React from "react";

const OfferCard = ({ data }) => {
  const { header, couponCode, description, offerLogo, offerTagColor } =
    data.info;
  return (
    <div className="mr-3 snap-center shrink-0">
      <button className="flex border border-[#e9e9eb] box-border shadow-lg rounded-lg p-2 h-full min-w-[200px] items-center">
        <div className="flex">
          <div className="mt-1 mb-1 flex flex-col self-stretch justify-center">
            <div className="flex items-center">
              <img
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/${offerLogo}`}
                className="w-5 h-5 mr-2"
                alt=""
              />
              <p className="text-base font-semibold whitespace-nowrap text-[#686b78] font-[ProximaNovaCondensedBold,arial,Helvetica Neue,sans-serif]">
                {header}
              </p>
            </div>
            <div className="text-xs text-[#93959f] mt-1 text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]">
              <span>{couponCode}</span>
              <span className="mx-1">|</span>
              <span className="RestaurantOffer_description__1SRJf">
                {description}
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default OfferCard;
