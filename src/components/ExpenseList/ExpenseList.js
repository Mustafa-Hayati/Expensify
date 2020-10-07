import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./../ExpeseListItem/ExpenseListItem";
import selectExpenses from "./../../selectors/expenses";

export const ExpenseList = ({ expenses }) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {!expenses.length ? (
          <div className="list-item list-item--message">
            <span>No Expenses</span>
          </div>
        ) : (
          expenses.map(exp => {
            return <ExpenseListItem key={exp.id} expense={{ ...exp }} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
