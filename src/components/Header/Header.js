import "./Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/authActions";

const Header = ({ startLogout }) => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact to="/" activeClassName="header__active-link">
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="header__active-link">
        CreateExpense
      </NavLink>
      <button onClick={startLogout}>Logout</button>
    </header>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout()),
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
