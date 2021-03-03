import React, { useState } from "react";
import { Modal } from "../../components";
import { RegisterForm } from "../../forms";
import { getUsers, addUser } from "../../api/auth";
import { useHistory } from "react-router";
import { validPassword } from "../../util/validators";

import "./RegisterModal.css";

const RegisterModal = (props) => {
  const { setUser, isOpened, onCloseModal, openRegisterModalFromLogin } = props;

  const [error, setError] = useState(null);

  const history = useHistory();
  const isHomepage = history.location.pathname === "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form values
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const params = { email, password };

    // Check password validation
    if (password && password.length < 5 && !validPassword(password)) {
      setError("Password is invaid. It must be long more then 5 characters.");
    }

    getUsers().then((res) => {
      // If user doesn't exist create a new one
      // instead give error
      if (!res.data.some((user) => user.email === email)) {
        addUser(params).then((res) => {
          const user = res.data; // Response

          // Authenticate the user
          setUser(user);

          // Close the modal
          onCloseModal();

          if (!isHomepage) {
            history.push("/");
          }
        });
      } else {
        setError("User with entered email already exist. Try using other.");
      }
    });
  };
  return (
    <Modal isOpen={isOpened} onClose={onCloseModal}>
      <h2 className="RegisterModal-title">Register</h2>
      {error ? <p className="error formError">{error}</p> : null}
      <RegisterForm
        handleSubmit={(e) => handleSubmit(e)}
        openRegisterModalFromLogin={openRegisterModalFromLogin}
      />
    </Modal>
  );
};

export default RegisterModal;
