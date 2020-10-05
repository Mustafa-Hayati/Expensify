import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "./../../components/ExpenseForm/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render expense form correctly with expenes data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
