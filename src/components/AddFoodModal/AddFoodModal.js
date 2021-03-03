import React from "react";
import { Modal } from "../../components";
import { AddFoodForm } from "../../forms";
import { addFood } from "../../api/insert";
import { useHistory } from "react-router";
import slugify from "react-slugify";

import "./AddFoodModal.css";

const AddFoodModal = (props) => {
  const { isOpened, onCloseModal, user } = props;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const text = e.target.elements.text.value;
    const price = Number(e.target.elements.price.value);
    const kcal = e.target.elements.kcal.value;
    const time = e.target.elements.time.value;
    const image = e.target.elements.image.value;
    const slug = slugify(name);
    const userId = user && user.id;

    const params = { name, text, price, kcal, time, image, slug, userId };

    addFood(params).then((res) => {
      const foodId = res.data.id;

      history.push(`/food/${slug}/${foodId}`);
      onCloseModal();
    });
  };
  return (
    <Modal isOpen={isOpened} onClose={onCloseModal}>
      <h2 className="AddFoodModal-title">Add your food</h2>
      <AddFoodForm handleSubmit={(e) => handleSubmit(e)} />
    </Modal>
  );
};

export default AddFoodModal;
