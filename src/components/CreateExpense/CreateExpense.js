import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { startAddExpense } from "../../actions/expensesAction";

const CreateExpense = ({ history, startAddExpense }) => {
  const onSubmit = expense => {
    startAddExpense(expense);
    history.push("/");
  };

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startAddExpense: expense => dispatch(startAddExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(CreateExpense);
