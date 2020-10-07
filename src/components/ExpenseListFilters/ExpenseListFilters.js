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

const ExpenseListFilters = ({
  filters,
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
}) => {
  const [calendarFocused, setCalendarFocused] = useState(null);

  const onInputChange = e => {
    setTextFilter(e.target.value);
  };

  const onSortChange = e => {
    const actionGenerator =
      e.target.value === "date" ? sortByDate : sortByAmount;
    actionGenerator();
  };

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onFocusChange = calendarFocused => {
    setCalendarFocused(calendarFocused);
  };

  return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input
            type="text"
            value={filters.text}
            onChange={onInputChange}
            className="text-input"
            placeholder="Search Expenses"
          />
        </div>
        <div className="input-group__item">
          <select
            className="select"
            onChange={onSortChange}
            value={filters.sortBy}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input-group__item">
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
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endDate => dispatch(setEndDate(endDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
