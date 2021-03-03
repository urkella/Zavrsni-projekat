import React from "react";
import { Form } from "../../components";

import "./RegisterForm.css";

const RegisterForm = (props) => {
  const { handleSubmit, openRegisterModalFromLogin } = props;
  return (
    <Form className="RegisterForm" handleSubmit={handleSubmit}>
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
      <input className="Submit" type="submit" value="Register" />
      <div
        className="Already-user"
        onClick={() => openRegisterModalFromLogin()}
      >
        <span>Already a user? Login</span>
      </div>
    </Form>
  );
};

export default RegisterForm;
