import React from "react";
import logo from "../../assets/images/logo.png";
import { navMenuItems } from "../../data/header";
import profileSvg from "../../assets/icons/profile.svg";
import loopSvg from "../../assets/icons/loop.svg";
import heartSvg from "../../assets/icons/heart.svg";
import cartSvg from "../../assets/icons/cart.svg";

import "./styles.scss";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="header__left">
        <img src={logo} alt="logo" className="header__logo-img" />
        <h2 className="header__logo-text">Furniro</h2>
      </Link>

      <div className="header__center">
        <ul className="header__nav">
          {navMenuItems.map((menuItem) => (
            <li key={menuItem.title}>
              <Link to={menuItem.link}>{menuItem.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="header__right">
        <ul className="header__menu">
          <li className="header__menu-item">
            <img src={profileSvg} alt="profile" />
          </li>
          <li className="header__menu-item">
            <img src={loopSvg} alt="loop" />
          </li>
          <li className="header__menu-item">
            <img src={heartSvg} alt="heart" />
          </li>
          <li className="header__menu-item">
            <img src={cartSvg} alt="cart" />
          </li>
        </ul>
      </div>
    </header>
  );
};
