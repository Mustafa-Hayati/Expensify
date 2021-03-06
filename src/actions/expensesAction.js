import database from "../firebase/firebase";

// ADD_EXPENSE
const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense,
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      })
      .catch(err => {
        console.log("Data did not get add to the database", err);
      });
  };
};

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// SET_EXPENSES
const setExpenses = expenses => {
  return {
    type: "SET_EXPENSES",
    expenses,
  };
};

const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];

        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};

export {
  addExpense,
  startAddExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
  setExpenses,
  startSetExpenses,
};
