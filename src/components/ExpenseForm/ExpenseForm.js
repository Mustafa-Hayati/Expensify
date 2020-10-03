import React, { useState } from "react";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";

const ExpenseForm = ({ onExpenseCreate, history }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [createdAt, setCreatedAt] = useState(moment());
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [error, setError] = useState("");

  // const onInputChange = e => {
  //   const name = e.target.name;
  //   eval(`set${name}(e.target.value)`);
  // };

  const onFormSubmit = e => {
    e.preventDefault();

    if (!description || !amount) {
      setError("Please provide a description and amount");
    } else {
      setError("");
      onExpenseCreate({
        description,
        amount: parseFloat(amount, 10) * 100,
        note,
        createdAt: createdAt.valueOf(),
      });
    }
  };

  const onDescriptionChange = e => {
    setDescription(e.target.value);
    setError("");
  };

  const onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
      setError("");
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
          // onChange={onInputChange}
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
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
