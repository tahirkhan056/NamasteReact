import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import MenuItemsList from "../components/MenuItemsList";
import OfferList from "../components/OfferList";
import RestaurantDetailHead from "../components/RestaurantDetailHead";
import Shimmer from "../components/Shimmer";
import { addRestaurant } from "../slice/cart";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const dispatch = useDispatch();

  const restaurant = useRestaurant(resId);
  if (!restaurant) {
    return <Shimmer />;
  }
  console.log("restaurant::", restaurant);
  const restaurantData = restaurant.cards.filter((c) => {
    return (
      c?.card?.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
  });

  const menuData = restaurant.cards.filter((c) => {
    return c?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  });

  const offerData = restaurant.cards.filter((c) => {
    return c?.card?.card?.gridElements?.infoWithStyle;
  });

  if (restaurantData.length) {
    dispatch(addRestaurant(restaurantData[0]?.card?.card?.info));
  }
  return (
    <div className="relative min-h-full flex flex-col min-w-[1240px]">
      <div className="pt-5 flex-grow">
        <div className="flex">
          <div className="w-[800px] min-h-[800px] mt-5 mx-auto">
            {restaurantData[0] && (
              <RestaurantDetailHead
                data={restaurantData[0]?.card?.card?.info}
              />
            )}
            {offerData[0] && (
              <OfferList
                data={
                  offerData[0]?.card?.card?.gridElements?.infoWithStyle?.offers
                }
              />
            )}
            {menuData[0] && (
              <MenuItemsList
                data={menuData[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
