import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { user } = useContext(UserContext);

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
  } = props.data;
  return (
    <div className="w-72 hover:shadow-xl p-5 hover:border m-3">
      <div>
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt="img"
          className="restaurent-img"
        />
      </div>
      <div className="m-5">
        <div className="text-lg font-medium break-words">{name}</div>
        <div className="text-sm mt-1 text-gray-500 font-thin">
          {cuisines.join(", ")}
        </div>
      </div>
      <div className="my-5 flex justify-between text-xs">
        <div>{avgRating}</div>
        <div>{slaString}</div>
        <div>{costForTwoString}</div>
      </div>
      <div>
        <span className="block text-bold text-xs">{user.name}</span>
        <span className="block text-bold text-xs">{user.email}</span>
      </div>
    </div>
  );
};
export default RestaurentCard;
