import "normalize.css/normalize.css";
import "./base_styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expensesAction";
import { setTextFilter } from "./actions/filtersActions";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 2000,
    note: "fuck government",
    createdAt: Date.now(),
  })
);
store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 3000,
    note: "fuck government",
    createdAt: Date.now(),
  })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
