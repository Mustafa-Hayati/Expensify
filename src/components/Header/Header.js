import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/authActions";

const Header = ({ startLogout }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link to="/dashboard">
            <h1 className="header__title">Expensify</h1>
          </Link>
          <button className="button button--link" onClick={startLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout()),
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
