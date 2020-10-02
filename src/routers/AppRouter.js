import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage/ExpenseDashboardPage";
import Header from "../components/Header/Header";
import CreateExpense from "./../components/CreateExpense/CreateExpense";
import HelpPage from "./../components/HelpPage/HelpPage";
import NotFound from "./../components/NotFound/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={ExpenseDashboardPage} />
          <Route path="/create" component={CreateExpense} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default AppRouter;
