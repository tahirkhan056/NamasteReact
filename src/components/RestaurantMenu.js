import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import MenuItemsList from "./MenuItemsList";
import MenuSearch from "./MenuSearch";
import OfferList from "./OfferList";
import RestaurantDetailHead from "./RestaurantDetailHead";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const restaurant = useRestaurant(resId);
  if (!restaurant) {
    return <Shimmer />;
  }

  const [restaurantData, offerData, menuData] = restaurant?.cards;
  const { info } = restaurantData.card.card;
  const { offers } = offerData.card.card.gridElements.infoWithStyle;
  const menu = menuData.groupedCard.cardGroupMap.REGULAR.cards;
  return (
    <div className="relative mt-20 min-h-full flex flex-col min-w-[1240px]">
      <div className="pt-5 flex-grow">
        <div className="flex">
          <div className="w-[800px] min-h-[800px] mt-5 mx-auto">
            <RestaurantDetailHead data={info} />
            <OfferList data={offers} />
            <MenuItemsList data={menu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
