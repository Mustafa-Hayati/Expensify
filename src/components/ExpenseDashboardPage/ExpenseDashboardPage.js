import React from "react";
import ExpenseListFilters from "../ExpenseListFilters/ExpenseListFilters";
import ExpenseList from "./../ExpenseList/ExpenseList";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
