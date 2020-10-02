import React from "react";
import { connect } from "react-redux";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>List</h2>
      <p>{expenses.length}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpenseList);
