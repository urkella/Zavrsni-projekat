import React from "react";
import { Form } from "../../components";

import "./LoginForm.css";

const LoginForm = (props) => {
  const { handleSubmit, openLoginModalFromRegister } = props;
  return (
    <Form className="LoginForm" handleSubmit={handleSubmit}>
      <div className="Field">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
      </div>
      <div className="Field">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
          required
        />
      </div>
      <input className="Submit" type="submit" value="Login" />
      <div
        className="Already-user"
        onClick={() => openLoginModalFromRegister()}
      >
        <span>Not a user? Register now</span>
      </div>
    </Form>
  );
};

export default LoginForm;
