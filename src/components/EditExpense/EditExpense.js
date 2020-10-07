import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import {
  startEditExpense,
  startRemoveExpense,
} from "../../actions/expensesAction";

const EditExpense = ({
  history,
  expense,
  startEditExpense,
  startRemoveExpense,
}) => {
  if (!expense) {
    history.push("/");
  }

  const onSubmit = update => {
    startEditExpense(expense.id, update);
    history.push("/");
  };

  const onRemoveClick = () => {
    startRemoveExpense(expense.id);
    history.push("/");
  };

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm onSubmit={onSubmit} expense={expense} />
        {expense && (
          <button className="button button--secondary" onClick={onRemoveClick}>
            Remove Expense
          </button>
        )}
      </div>
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
    startEditExpense: (id, update) => dispatch(startEditExpense(id, update)),
    startRemoveExpense: id => dispatch(startRemoveExpense({ id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
