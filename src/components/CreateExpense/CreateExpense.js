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
      <h2>Add Expense</h2>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startAddExpense: expense => dispatch(startAddExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(CreateExpense);
