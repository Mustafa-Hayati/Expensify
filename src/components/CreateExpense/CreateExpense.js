import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { addExpense } from "../../actions/expensesAction";

const CreateExpense = ({ history, dispatch }) => {
  const onExpenseCreate = expense => {
    dispatch(addExpense(expense));
    history.push("/");
  };
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onExpenseCreate={onExpenseCreate} />
    </div>
  );
};

export default connect()(CreateExpense);
