import React from "react";
import { useEffect, useState } from "react";
import { getFoodByUserId } from "../../api/fetch";
import { FoodCard } from "../../components";
import { deleteFood } from "../../api/delete";

import "./MyListings.css";

function MyListings(props) {
  const { title, cards, userId } = props;

  const [listings, getMyListings] = useState([]);
  const [error, getError] = useState();

  useEffect(() => {
    const sort = "id";
    const order = "DESC";
    getFoodByUserId(userId, sort, order)
      .then((res) => {
        // Get the response
        const response = res.data;
        return getMyListings(response);
      })
      .catch((e) => {
        console.log(e);
        getError(e);
      });
  }, []);

  const onDeleteFood = (id) => {
    return deleteFood(id).then(() => {
      const listingsWithoutDeleted = listings.filter(
        (listing) => id !== listing.id
      );

      return getMyListings(listingsWithoutDeleted);
    });
  };

  const displayResults = listings?.map((food, key) => {
    return (
      <FoodCard
        {...food}
        key={key}
        currentUserId={userId}
        onDeleteFood={onDeleteFood}
      />
    );
  });

  const errorMessage = (
    <p className="error">There has been error fetching food data.</p>
  );
  const noListingsMessage = <p>No listings found.</p>;

  const listingsFound = listings && listings.length > 0;

  return error ? (
    errorMessage
  ) : (
    <div className="MyListings">
      <h1 className="Title">{title ? title : "Recently added"}</h1>
      {listingsFound ? (
        <div
          className="MyListingsWrapper"
          style={{ gridTemplateColumns: `repeat(${cards}, 1fr)` }}
        >
          {displayResults}
        </div>
      ) : (
        noListingsMessage
      )}
    </div>
  );
}

export default MyListings;
