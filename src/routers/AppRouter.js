import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage/ExpenseDashboardPage";
import CreateExpense from "./../components/CreateExpense/CreateExpense";
import HelpPage from "./../components/HelpPage/HelpPage";
import NotFound from "./../components/NotFound/NotFound";
import EditExpense from "../components/EditExpense/EditExpense";
import LoginPage from "../components/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
          <PrivateRoute path="/create" component={CreateExpense} />
          <PrivateRoute path="/edit/:id" component={EditExpense} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default AppRouter;
