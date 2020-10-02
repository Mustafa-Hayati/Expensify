import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../../actions/filtersActions";

const ExpenseListFilters = ({ text, dispatch }) => {
  const onInputChange = e => {
    dispatch(setTextFilter(e.target.value));
  };

  return (
    <div>
      <input type="text" value={text} onChange={onInputChange} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    text: state.filters.text,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
