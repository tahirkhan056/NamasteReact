import React from "react";
import OfferCard from "./OfferCard";

const OfferList = ({ data }) => {
  return (
    <div className="flex max-w-[800px] overflow-y-auto">
      {data.map((off, i) => {
        return <OfferCard key={"offer_" + i} data={off} />;
      })}
    </div>
  );
};

export default OfferList;
