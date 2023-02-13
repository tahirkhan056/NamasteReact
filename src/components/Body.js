import React, { useState, useEffect, useContext } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allrestaurants, setAllrestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnline();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4478404&lng=76.9703205&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllrestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const onTextChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchButtonClickHandler = () => {
    const filteredData = filterdata(searchText, allrestaurants);
    setFilteredRestaurants(filteredData);
  };

  if (!isOnline) {
    return (
      <div className="center">
        <h1>🔴 You are offline</h1>
      </div>
    );
  }

  if (allrestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="h-10 my-8 text-center">
        <input
          type={"text"}
          placeholder={"Search"}
          value={searchText}
          onChange={onTextChangeHandler}
          className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
        />
        <button
          className="bg-purple-600 text-white rounded w-20 h-9 mx-3"
          onClick={searchButtonClickHandler}
        >
          Search
        </button>
        <input
          type={"text"}
          placeholder={"Search"}
          value={user.name}
          onChange={(e) => {
            setUser({
              name: e.target.value,
              email: e.target.value + "@suppoert.com",
            });
          }}
          className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => {
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
