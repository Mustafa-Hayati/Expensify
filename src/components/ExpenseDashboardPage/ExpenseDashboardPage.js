import React from "react";
import ExpenseListFilters from "../ExpenseListFilters/ExpenseListFilters";
import ExpensesSummary from "../ExpensesSummary/ExpensesSummary";
import ExpenseList from "./../ExpenseList/ExpenseList";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
