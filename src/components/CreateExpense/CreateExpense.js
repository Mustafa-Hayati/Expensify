import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { addExpense } from "../../actions/expensesAction";

const CreateExpense = ({ history, onSubmit }) => {
  const onExpenseCreate = expense => {
    // dispatch(addExpense(expense));
    onSubmit(expense);
    history.push("/");
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm onSubmit={onExpenseCreate} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: expense => dispatch(addExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(CreateExpense);
