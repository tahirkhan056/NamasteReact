import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = async () => {
    const result = await fetch(FETCH_MENU_URL + id);
    const data = await result.json();
    setRestaurant(data.data);
  };

  return restaurant;
};

export default useRestaurant;
