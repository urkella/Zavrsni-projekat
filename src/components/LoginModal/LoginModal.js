import React, { useState } from "react";
import { Modal } from "../../components";
import { LoginForm } from "../../forms";
import { getUsers } from "../../api/auth";
import { useHistory } from "react-router";

import "./LoginModal.css";

const LoginModal = (props) => {
  const { setUser, isOpened, onCloseModal, openLoginModalFromRegister } = props;

  const [error, setError] = useState(null);

  const history = useHistory();
  const isHomepage = history.location.pathname === "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    getUsers().then((res) => {
      let user = res.data.find(
        (el) => el.email === email && el.password === password
      );
      if (user) {
        setUser(user);
        onCloseModal();

        if (!isHomepage) {
          history.push("/");
        }
      } else {
        setError("User with entered email and password can't be found.");
      }
    });
  };
  return (
    <Modal isOpen={isOpened} onClose={onCloseModal}>
      <h2 className="LoginModal-title">Login</h2>
      {error ? <p className="error formError">{error}</p> : null}
      <LoginForm
        handleSubmit={(e) => handleSubmit(e)}
        openLoginModalFromRegister={openLoginModalFromRegister}
      />
    </Modal>
  );
};

export default LoginModal;
