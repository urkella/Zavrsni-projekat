import React from "react";
import { Form } from "../../components";

import "./AddFoodForm.css";

const AddFoodForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form className="AddFood" handleSubmit={handleSubmit}>
      <div className="Field">
        <label>Food name</label>
        <input
          type="text"
          placeholder="Enter food name"
          id="name"
          name="name"
        />
      </div>
      <div className="Field">
        <label>Description</label>
        <input
          type="textarea"
          placeholder="Enter food description"
          id="text"
          name="text"
          required
        />
      </div>
      <div className="Field">
        <label id="price">Price</label>
        <input
          type="number"
          placeholder="Enter food price"
          id="price"
          name="price"
          required
        />
      </div>
      <div className="Field">
        <label id="kcal">Calories</label>
        <input
          type="number"
          placeholder="Enter calories"
          id="kcal"
          name="kcal"
          required
        />
      </div>
      <div className="Field">
        <label id="kcal">Preparation time</label>
        <input
          className="without"
          type="time"
          placeholder="Enter preparation time"
          id="time"
          name="time"
          required
        />
      </div>
      <div className="Field">
        <label id="price">Image URL</label>
        <input
          type="text"
          placeholder="Enter external image link"
          id="image"
          name="image"
          required
        />
      </div>
      <input className="Submit" type="submit" value="Add food" />
    </Form>
  );
};

export default AddFoodForm;
