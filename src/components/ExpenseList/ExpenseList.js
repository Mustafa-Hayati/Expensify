import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./../ExpeseListItem/ExpenseListItem";
import selectExpenses from "./../../selectors/expenses";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expenses List</h2>
      {expenses.map(exp => {
        return <ExpenseListItem key={exp.id} expense={{ ...exp }} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
