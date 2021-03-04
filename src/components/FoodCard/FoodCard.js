import React from "react";
import { Link } from "react-router-dom";
import { formatMoney } from "../../util/data";
import { Image } from "../../components";
import { deleteFood } from "../../api/delete";

import "./FoodCard.css";

const FoodCard = (props) => {
  const {
    id,
    currentUserId,
    userId,
    name,
    price,
    text,
    image,
    slug,
    onDeleteFood,
  } = props;

  const isCurrentUserAuthor = currentUserId === userId;

  return (
    <>
      <div className="FoodCard">
        <Link className="AspectWrapper" to={`/food/${slug}/${id}`}>
          <div className="ImageWrapper">
            <Image className="Image" src={image} alt={name} />
            <div className="Overlay">
              <div className="OverlayContent">
                <p>
                  {text.substring(0, 130)}
                  {text && text.length > 130 && "..."}
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div className="Content">
          <h2>{name}</h2>
          <p>{formatMoney(price)}</p>
          {isCurrentUserAuthor ? (
            <span
              className="Delete"
              onClick={() => onDeleteFood(id)}
              title={`Delete ${name}`}
            >
              Delete
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FoodCard;
