import React from "react";
import { Link } from "react-router-dom";
import { formatMoney } from "../../util/data";
import { Image } from "../../components";

import "./FoodCard.css";

const FoodCard = (props) => {
  const { id, name, price, text, image, slug } = props;
  return (
    <Link className="FoodCard" to={`/food/${slug}/${id}`}>
      <div className="AspectWrapper">
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
      </div>
      <div className="Content">
        <h2>{name}</h2>
        <p>{formatMoney(price)}</p>
      </div>
    </Link>
  );
};

export default FoodCard;
