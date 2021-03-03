import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  AddFoodModal,
  LoginModal,
  RegisterModal,
} from "../../components";

import "./Header.css";

const Header = (props) => {
  const { setUser, isLogged, user } = props;

  const [isFoodModalOpen, setFoodModalOpen] = useState(false);
  const [isLoginModalOpen, setModalLoginOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const onAddFood = () => {
    if (isLogged) {
      setFoodModalOpen(true);
    } else {
      setModalLoginOpen(true);
    }
  };

  const openRegisterModalFromLogin = () => {
    setRegisterModalOpen(false);
    setModalLoginOpen(true);
  };
  const openLoginModalFromRegister = () => {
    setRegisterModalOpen(true);
    setModalLoginOpen(false);
  };
  return (
    <>
      <div className="Header">
        <div className="Header-container">
          <div className="Header-logo">
            <Logo />
          </div>
          <ul className="Header-menu">
            <li className="Header-menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="Header-menu-item">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li
              className="Header-menu-item Header-add-food-item"
              onClick={() => onAddFood()}
            >
              Add Food
            </li>
            {isLogged ? (
              <>
                <li className="Header-menu-item">
                  <Link to="/my-listings">My Listings</Link>
                </li>
                <li
                  className="Header-menu-item Header-add-food-item"
                  onClick={() => setUser(null)}
                >
                  Logout
                </li>
              </>
            ) : (
              <>
                <li
                  className="Header-menu-item Header-add-food-item"
                  onClick={() => setRegisterModalOpen(true)}
                >
                  Sign up
                </li>
                <li
                  className="Header-menu-item Header-add-food-item"
                  onClick={() => setModalLoginOpen(true)}
                >
                  Login
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <LoginModal
        setUser={setUser}
        isOpened={isLoginModalOpen}
        onCloseModal={() => setModalLoginOpen(false)}
        openLoginModalFromRegister={openLoginModalFromRegister}
      />
      <RegisterModal
        setUser={setUser}
        isOpened={isRegisterModalOpen}
        onCloseModal={() => setRegisterModalOpen(false)}
        openRegisterModalFromLogin={openRegisterModalFromLogin}
      />
      <AddFoodModal
        isLogged={isLogged}
        user={user}
        isOpened={isFoodModalOpen}
        onCloseModal={() => setFoodModalOpen(false)}
      />
    </>
  );
};

export default Header;
