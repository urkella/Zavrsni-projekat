import React from "react";

const GoogleMap = (props) => {
  const { className } = props;
  return (
    <iframe
      className={className}
      height="450"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHaPEmjvM1IkRL-GHLnj1V5w&key=AIzaSyATglC6cNHLEgUqwtDJwWmCNsjaTcTawuA"
    ></iframe>
  );
};

export default GoogleMap;
