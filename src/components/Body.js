import React, { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4478404&lng=76.9703205&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json::", json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const onTextChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchButtonClickHandler = () => {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
    setRestaurants(filteredData);
  };

  const cancelButtonHandler = () => {
    setRestaurants(restaurantList);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div>
        <input
          type={"text"}
          value={searchText}
          onChange={onTextChangeHandler}
        />
        <button onClick={searchButtonClickHandler}>Search</button>
        <button onClick={cancelButtonHandler}>Cancel</button>
      </div>
      <div className="content">
        {restaurants.map((restaurant) => {
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
    </>
  );
};

export default Body;
