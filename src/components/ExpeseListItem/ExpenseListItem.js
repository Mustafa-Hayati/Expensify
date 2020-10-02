import React from "react";

const ExpenseListItem = ({ expense: { description, amount, createdAt } }) => {
  return (
    <div>
      <h4>{description}</h4>
      <p>
        ${amount / 100} - {createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;
