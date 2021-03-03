import React from "react";
import { useEffect, useState } from "react";
import { getFood } from "../../api/fetch";
import { FoodCard } from "../../components";

import "./Foods.css";

function Foods(props) {
  const { title, limit, cards } = props;

  const [foods, getFoods] = useState([]);
  const [error, getError] = useState();

  useEffect(() => {
    const sort = "id";
    const order = "DESC";
    getFood(limit, sort, order)
      .then((res) => {
        // Get the response
        const response = res.data;
        return getFoods(response);
      })
      .catch((e) => {
        console.log(e);
        getError(e);
      });
  }, []);

  const displayResults = foods?.map((food, key) => {
    return <FoodCard key={key} {...food} />;
  });

  const errorMessage = (
    <p className="error">There has been error fetching food data.</p>
  );

  return error ? (
    errorMessage
  ) : (
    <div className="Foods">
      <h1 className="Title">{title ? title : "Recently added"}</h1>
      <div
        className="FoodsWrapper"
        style={{ gridTemplateColumns: `repeat(${cards}, 1fr)` }}
      >
        {displayResults}
      </div>
    </div>
  );
}

export default Foods;
