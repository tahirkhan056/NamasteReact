import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { GoStar, TbDiscount2 } from "react-icons/all";

const RestaurentCard = (props) => {
  const { user } = useContext(UserContext);

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
    aggregatedDiscountInfo,
  } = props.data;

  let starBgColor = "";
  if (avgRating == "--") {
    starBgColor = "";
  } else if (parseInt(avgRating) >= 4) {
    starBgColor = "bg-[#59C47A] text-white";
  } else {
    starBgColor = "bg-[#DB7C38] text-white";
  }
  console.log("cloudinaryImageId::", cloudinaryImageId);
  return (
    <div className="w-72 hover:shadow-xl p-5 hover:border group mb-4">
      <div>
        {cloudinaryImageId ? (
          <img
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
            alt="img"
            className="w-[254px] h-40"
          />
        ) : (
          <div className="w-[254px] h-40 bg-[#E4E6EB]"></div>
        )}
      </div>
      <div className="my-5">
        <div className="text-[17px] font-medium break-words">{name}</div>
        <div className="text-[13px] mt-1 text-[#686b78]">
          {cuisines.join(", ")}
        </div>
      </div>
      <div className="my-5 flex justify-between text-xs text-[#535665]">
        <div className={`flex p-1  ${starBgColor}`}>
          <GoStar className="text-sm" />
          {avgRating}
        </div>
        <div>{slaString}</div>
        <div>{costForTwoString}</div>
      </div>
      {aggregatedDiscountInfo?.shortDescriptionList[0] && (
        <div className="mt-[14px] pt-[14px] text-[#8a584b] flex border-t">
          <span className="text-2xl">
            <TbDiscount2 className="bg-red" />
          </span>
          <span className="text-sm p-[2px]">
            {" "}
            {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
          </span>
        </div>
      )}
      <div className="mt-[14px] text-sm font-semibold pt-[14px] text-center border-t uppercase text-[#5d8ed5] invisible group-hover:visible">
        <span>{"Quick View"}</span>
      </div>
    </div>
  );
};
export default RestaurentCard;
