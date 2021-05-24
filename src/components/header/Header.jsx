import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img
          src="https://i.pinimg.com/originals/da/57/80/da5780f125af8ccbed7a84150e89fcad.png"
          alt="logo"
          className="logo"
        />
      </Link>
      <div className="options">
        <Link to="/" className="option">
          Home
        </Link>
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Logout
          </div>
        ) : (
          <Link to="/login" className="option">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
