import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const setFilterType = (props, value) => {
  if(value === 'date') { 
    props.dispatch(sortByDate())
  } else if(value === 'amount') {
    props.dispatch(sortByAmount())
  }
 };

const ExpenseListFilters = (props) => (
  <div>
    <input type='text' value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value))
    }} />
    <select value={props.filters.sortBy} onChange={(e)=> {setFilterType(props, e.target.value)}}>
      <option value='date'>Sort by date</option>
      <option value='amount'>Sort by Amount</option>
    </select>
  </div>
);

export default connect(mapStateToProps)(ExpenseListFilters);