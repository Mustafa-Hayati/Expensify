import "react-dates/lib/css/_datepicker.css";
import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import moment from "moment";

const ExpenseForm = ({ onSubmit, expense }) => {
  const [description, setDescription] = useState(
    expense ? expense.description : ""
  );
  const [amount, setAmount] = useState(
    expense ? (expense.amount / 100).toString() : ""
  );
  const [note, setNote] = useState(expense ? expense.note : "");
  const [createdAt, setCreatedAt] = useState(
    expense ? moment(expense.createdAt) : moment()
  );
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [error, setError] = useState("");

  const onFormSubmit = e => {
    e.preventDefault();

    if (!description || !amount) {
      setError("Please provide a description and amount");
    } else {
      setError("");
      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        note,
        createdAt: createdAt.valueOf(),
      });
    }
  };

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  const onDateChange = createdAt => {
    if (createdAt) {
      setCreatedAt(createdAt);
    }
  };

  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onFormSubmit}>
        <input
          onChange={onDescriptionChange}
          name="Description"
          placeholder="Description"
          autoFocus
          value={description}
        />
        <input
          onChange={onAmountChange}
          type="number"
          placeholder="Amount"
          value={amount}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={calendarFocused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          onChange={e => setNote(e.target.value)}
          value={note}
          placeholder="Add a note for your expense (optional)"
        ></textarea>
        <button>{expense ? "Edit" : "Add"} Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
