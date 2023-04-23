import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItems(props) {
  return (
    <div>
      <ExpenseDetails title={props.title} amount={props.amount}></ExpenseDetails>
     <ExpenseDate date={props.date}></ExpenseDate>
      <h2>{props.location}</h2>
      </div>
  );
}

export default ExpenseItems;
