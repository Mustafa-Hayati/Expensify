import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { editExpense, removeExpense } from "../../actions/expensesAction";

const EditExpense = ({ history, expense, editExpense, removeExpense }) => {
  if (!expense) {
    history.push("/");
  }

  const onSubmit = update => {
    // dispatch(editExpense(expense.id, update));
    editExpense(expense.id, update);
    history.push("/");
  };

  const onRemoveClick = () => {
    // dispatch(removeExpense({ id: expense.id }));
    removeExpense(expense.id);
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

const mapDispatchToProps = dispatch => {
  return {
    editExpense: (id, update) => dispatch(editExpense(id, update)),
    removeExpense: id => dispatch(removeExpense({ id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
