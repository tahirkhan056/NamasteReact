import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //Reading dynamic params.
  const params = useParams();
  const { resId } = params;
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurantDetail(resId);
  }, []);

  const getRestaurantDetail = async (id) => {
    const result = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.4478404&lng=76.9703205&menuId=${id}`
    );
    const data = await result.json();
    setRestaurant(data.data);
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant Id :{resId}</h1>
        <h2>Name: {restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>Area:{restaurant.area}</h3>
        <h3>City:{restaurant.city}</h3>
        <h3>Average Rating:{restaurant.avgRating} stars</h3>
        <h3>Cost For Two : {restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
