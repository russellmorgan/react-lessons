import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
  state = {
    description:'',
    amount: '',
    note:'',
    createdAt: moment(),
    calendarFocused: false
  };
  
  onDescriptionChange = (e) => {
    const desc = e.target.value;
    this.setState(() => ({description:desc}))
  };

  onNoteChange = (e) => {
    const newNote = e.target.value;
    this.setState(() => ({note:newNote}))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    //Should have a number test here but eh...
    this.setState(() => ({amount:amount}))
  };

  onDateChange = (createdAt) => {
    this.setState(()=>({ createdAt }))
  };

  onFocusChange = ({ focused}) => {
    this.setState(()=> ({calendarFocused: focused }))
  };

  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='description' value={this.state.description} autoFocus onChange={this.onDescriptionChange} />
          <input type='number' placeholder='amount' value={this.state.amount} onChange={this.onAmountChange}/>
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange} 
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea placeholder='add a note (optional)' onChange={this.onNoteChange} value={this.state.note}></textarea>
          <button>Submit Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;