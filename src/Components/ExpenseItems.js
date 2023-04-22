function ExpenseItems() {
  const expenseAmount =40;
  const expenseDate = new Date(2023,2,28)
  const expenseTitle  = "Bike wash"
  const loacationOfExpense ="lko"
  return (
    <div>
      <h2>{expenseTitle}</h2>
      <ol>
        <li>{expenseAmount}</li>
        <li>{expenseDate.toDateString()}</li>
        <li>{loacationOfExpense}</li>
      </ol>
    </div>
  );
}

export default ExpenseItems;
