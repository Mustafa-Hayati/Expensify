import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filtersActions";

const ExpenseListFilters = ({ text, sortBy, dispatch }) => {
  const onInputChange = e => {
    dispatch(setTextFilter(e.target.value));
  };

  const onSelectionChange = e => {
    const actionGenerator =
      e.target.value === "date" ? sortByDate : sortByAmount;
    dispatch(actionGenerator());
  };

  return (
    <div>
      <input type="text" value={text} onChange={onInputChange} />
      <select onChange={onSelectionChange} value={sortBy}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = ({ filters: { text, sortBy } }) => {
  return {
    text,
    sortBy,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
