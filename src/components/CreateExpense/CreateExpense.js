import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { addExpense } from "../../actions/expensesAction";

const CreateExpense = ({ history, addExpense }) => {
  const onSubmit = expense => {
    // dispatch(addExpense(expense));
    addExpense(expense);
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
    addExpense: expense => dispatch(addExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(CreateExpense);
