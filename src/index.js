import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./base_styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expensesAction";
import "react-dates/initialize";
import { firebase } from "./firebase/firebase";

const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById("root")
  );
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("login");
  } else {
    console.log("log out");
  }
});
