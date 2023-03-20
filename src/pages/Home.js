import React, { useState, useEffect } from "react";
import RestaurentCard from "../components/RestaurentCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper";
import SortFilterHeader from "../components/SortFilterHeader";
import Carousel from "../components/Carousel";
import { GET_ALL_RESTAURANTS } from "../constant";

const Body = () => {
  const [allrestaurants, setAllrestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurantCount, setRestaurantCount] = useState(0);
  const [sorts, setSorts] = useState([]);
  const [sortBy, setSortBy] = useState("RELEVANCE");
  const [carouselData, setCarouselData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getInitialRestaurents("RELEVANCE");
  }, []);

  useEffect(() => {
    getRestaurents(sortBy);
  }, [sortBy]);

  async function getInitialRestaurents(sortBy) {
    setIsLoading(true);
    const data = await fetch(GET_ALL_RESTAURANTS + sortBy);
    const json = await data.json();
    const allRestaurant = json?.data?.cards.filter(
      (card) => card.cardType == "seeAllRestaurants"
    );
    const allCarouselCards = json?.data?.cards.filter(
      (card) => card.data.subtype == "topCarousel"
    );
    setAllrestaurants(allRestaurant[0]?.data?.data?.cards);
    setFilteredRestaurants(allRestaurant[0]?.data?.data?.cards);
    setRestaurantCount(allRestaurant[0]?.data?.data?.totalOpenRestaurants);
    setSorts(json?.data?.sorts);
    setCarouselData(allCarouselCards[0]?.data?.data?.cards);
    setIsLoading(false);
  }

  async function getRestaurents(sortBy) {
    setIsLoading(true);
    const data = await fetch(GET_ALL_RESTAURANTS + sortBy);
    const json = await data.json();
    const allRestaurant = json?.data?.cards.filter(
      (card) => card.cardType == "seeAllRestaurants"
    );
    setAllrestaurants(allRestaurant[0]?.data?.data?.cards);
    setFilteredRestaurants(allRestaurant[0]?.data?.data?.cards);
    setRestaurantCount(allRestaurant[0]?.data?.data?.totalOpenRestaurants);
    setIsLoading(false);
  }

  const searchButtonClickHandler = (searchText) => {
    const filteredData = filterdata(searchText, allrestaurants);
    setFilteredRestaurants(filteredData);
  };

  return (
    <div className="mx-[70px]">
      <div className="mx-[50px]">
        {carouselData && <Carousel data={carouselData} />}
        <SortFilterHeader
          restCount={restaurantCount}
          sorts={sorts}
          updateShortBy={setSortBy}
          sortBy={sortBy}
        />
        {isLoading || allrestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <div
            className="flex flex-wrap justify-between"
            data-testid="rest-list"
          >
            {filteredRestaurants?.map((restaurant) => {
              return (
                <Link
                  key={restaurant.data.id}
                  to={`/restaurant/${restaurant.data.id}`}
                >
                  <RestaurentCard {...restaurant} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
