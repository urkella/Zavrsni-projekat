import React from "react";
import { useEffect, useState } from "react";
import { getFoodById } from "../../api/fetch";
import { formatMoney, convert24to12, goToPreviousPath } from "../../util/data";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router";

import "./Food.css";

function Food() {
  const [food, getFood] = useState([]);
  const [error, getError] = useState();
  const [loaded, setLoaded] = useState(false);

  const { name, text, price, kcal, time, image } = food;
  const { id } = useParams();
  const history = useHistory();

  const formatTime = convert24to12(String(time));

  // Call the function as soon as
  // the component loads
  useEffect(() => {
    getFoodById(id)
      .then((res) => {
        // Get the response
        const response = res.data;
        setLoaded(true);
        return getFood(response);
      })
      .catch((e) => {
        // Console log the error and
        // update the error state
        console.log(e);
        getError(e);
      });
  }, [id]);

  // Error message
  const errorMessage = error ? (
    <div className="error-container">
      <p className="error">Error while loading the food.</p>
      <Link className="error-link" to="/">
        &#8592; Go to homepage
      </Link>
    </div>
  ) : null;

  return loaded ? (
    <div className="Food">
      <div className="Food-wrapper">
        <span className="Food-back" onClick={() => goToPreviousPath(history)}>
          &#8592; Go back
        </span>
        <figure className="Food-main">
          {error ? (
            errorMessage
          ) : (
            <>
              <div className="Food-hero">
                <img src={image} alt="dish" className="Food-img" />
              </div>
              <div className="Food-content">
                <div className="Food-title">
                  <h1 className="Food-heading">{name}</h1>
                </div>
                <p className="Food-description">{text}</p>
                {kcal || time ? (
                  <div className="Food-details">
                    {kcal ? (
                      <p className="Food-detail">
                        <span className="emoji">🍕</span>
                        {kcal} Kcal
                      </p>
                    ) : null}
                    {time ? (
                      <p className="Food-detail">
                        <span className="emoji">⏱</span>
                        {formatTime}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
              <div className="Food-price">{formatMoney(price)}</div>
            </>
          )}
        </figure>
      </div>
    </div>
  ) : null;
}

export default Food;
