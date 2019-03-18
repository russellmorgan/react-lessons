import React from 'react';
import { connect } from  'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }, props) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {description}</p>
    <button onClick={(e) => { 
      dispatch(removeExpense({id}));
    }}>Remove Expense</button>
  </div>
);

export default connect()(ExpenseListItem);