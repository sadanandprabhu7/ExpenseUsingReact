function ExpenseItems(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.amount}</h2>
      <h2>{props.date}</h2>
      <h2>{props.location}</h2>
      </div>
  );
}

export default ExpenseItems;
