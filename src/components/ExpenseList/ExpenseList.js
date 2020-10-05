import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./../ExpeseListItem/ExpenseListItem";
import selectExpenses from "./../../selectors/expenses";

export const ExpenseList = ({ expenses }) => {
  return (
    <div>
      {!expenses.length ? (
        <p>No Expenses</p>
      ) : (
        expenses.map(exp => {
          return <ExpenseListItem key={exp.id} expense={{ ...exp }} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
