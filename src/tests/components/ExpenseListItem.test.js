import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "./../../components/ExpeseListItem/ExpenseListItem";
import expenses from "./../fixtures/expenses";

test("should render ExpenseListItem with a given expense", () => {
  const wrapper = shallow(
    <ExpenseListItem key={expenses[0].id} expense={expenses[0]} />
  );
  expect(wrapper).toMatchSnapshot();
});
