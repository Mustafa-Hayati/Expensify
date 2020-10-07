import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage/ExpenseDashboardPage";
import Header from "../components/Header/Header";
import CreateExpense from "./../components/CreateExpense/CreateExpense";
import HelpPage from "./../components/HelpPage/HelpPage";
import NotFound from "./../components/NotFound/NotFound";
import EditExpense from "../components/EditExpense/EditExpense";
import LoginPage from "../components/LoginPage/LoginPage";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard" component={ExpenseDashboardPage} />
          <Route path="/create" component={CreateExpense} />
          <Route path="/help" component={HelpPage} />
          <Route path="/edit/:id" component={EditExpense} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default AppRouter;
