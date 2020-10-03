import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({
  expense: { description, amount, createdAt, id },
}) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        ${amount / 100} - {createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;
