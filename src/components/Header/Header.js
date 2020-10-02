import "./Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact to="/" activeClassName="header__active-link">
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="header__active-link">
        CreateExpense
      </NavLink>
      <NavLink to="/help" activeClassName="header__active-link">
        Help
      </NavLink>
    </header>
  );
};

export default Header;
