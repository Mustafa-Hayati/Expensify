import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../actions/expensesAction";

const ExpenseListItem = ({
  expense: { description, amount, createdAt, id },
  dispatch,
}) => {
  const onRemoveClick = () => {
    dispatch(removeExpense({ id }));
  };

  return (
    <div>
      <h4>{description}</h4>
      <p>
        ${amount / 100} - {createdAt}
      </p>
      <button onClick={onRemoveClick}>Remove</button>
    </div>
  );
};

export default connect()(ExpenseListItem);
