import {
  addExpense,
  removeExpense,
  editExpense,
} from "../../actions/expensesAction";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: 13 });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: 13,
  });
});

test("should setup edit expense action object", () => {
  expect(editExpense("13blahblah", { name: "Mustafa" })).toEqual({
    type: "EDIT_EXPENSE",
    id: "13blahblah",
    updates: {
      name: "Mustafa",
    },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 1000000,
    note: "March",
    createdAt: 1000,
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
