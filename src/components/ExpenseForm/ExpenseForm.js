import React, { useState } from "react";

const ExpenseForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");

  // const onInputChange = e => {
  //   const name = e.target.name;
  //   eval(`set${name}(e.target.value)`);
  // };

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  return (
    <div>
      <form>
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
