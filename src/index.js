import "normalize.css/normalize.css";
import "react-dates/initialize";
import "./base_styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expensesAction";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 4500,
  })
);
store.dispatch(
  addExpense({
    description: "Gas bill",
    createdAt: 1000,
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    amount: 109500,
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
