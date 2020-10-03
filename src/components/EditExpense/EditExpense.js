import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { editExpense, removeExpense } from "../../actions/expensesAction";

const EditExpense = ({ history, expense, dispatch }) => {
  if (!expense) {
    history.push("/");
  }

  const onSubmit = update => {
    dispatch(editExpense(expense.id, update));
    history.push("/");
  };

  const onRemoveClick = () => {
    dispatch(removeExpense({ id: expense.id }));
    history.push("/");
  };

  return (
    <div>
      <ExpenseForm onSubmit={onSubmit} expense={expense} />
      {expense && <button onClick={onRemoveClick}>Remove</button>}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(exp => exp.id === props.match.params.id),
  };
};

export default connect(mapStateToProps)(EditExpense);
