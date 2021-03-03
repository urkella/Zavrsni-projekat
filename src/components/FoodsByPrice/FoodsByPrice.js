import React from "react";
import { useEffect, useState } from "react";
import { getFood } from "../../api/fetch";
import { FoodCard } from "../../components";

import "./FoodsByPrice.css";

function FoodsByPrice(props) {
  const { limit } = props;

  const [FoodsByPrice, getFoodsByPrice] = useState([]);
  const [error, getError] = useState();

  useEffect(() => {
    const sort = "price";
    const order = "ASC";
    getFood(limit, sort, order)
      .then((res) => {
        // Get the response
        const response = res.data;
        return getFoodsByPrice(response);
      })
      .catch((e) => {
        console.log(e);
        getError(e);
      });
  }, []);

  const displayResults = FoodsByPrice?.map((food, key) => {
    return <FoodCard key={key} {...food} />;
  });

  const errorMessage = (
    <p className="error">There has been error fetching food by price data.</p>
  );

  return error ? (
    errorMessage
  ) : (
    <div className="FoodsByPrice">
      <h1 className="Title">Sorted by lowest price</h1>
      <div className="FoodsByPriceWrapper">{displayResults}</div>
    </div>
  );
}

export default FoodsByPrice;
