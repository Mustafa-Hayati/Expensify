import React, { useState } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../../actions/filtersActions";

const ExpenseListFilters = ({ filters, dispatch }) => {
  const [calendarFocused, setCalendarFocused] = useState(null);

  const onInputChange = e => {
    dispatch(setTextFilter(e.target.value));
  };

  const onSelectionChange = e => {
    const actionGenerator =
      e.target.value === "date" ? sortByDate : sortByAmount;
    dispatch(actionGenerator());
  };

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  const onFocusChange = calendarFocused => {
    setCalendarFocused(calendarFocused);
  };

  return (
    <div>
      <input type="text" value={filters.text} onChange={onInputChange} />
      <select onChange={onSelectionChange} value={filters.sortBy}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={filters.startDate}
        endDate={filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
        startDateId="dateRangePicker"
        endDateId="something"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
