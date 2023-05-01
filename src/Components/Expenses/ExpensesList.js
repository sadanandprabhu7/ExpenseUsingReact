import ExpenseItems from "./ExpenseItems";
import "./ExpenseList.css"
const ExpensesList = props => {
    if(props.items.length === 0)
    {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }
    else if(props.items.length === 1)
    {
      return (
        <div> 
        <ul className="expense-list">
        {props.items.map(expenseData=> (
        <ExpenseItems key={expenseData.id}
        title={expenseData.title} 
        amount={expenseData.amount}
        date={expenseData.date}/>))}
        </ul>
        <h2 className="expenses-list__fallback">Add more Expenses</h2>
        </div>               
        )
    }
    return (
        <ul className="expense-list">
        {props.items.map(expenseData=> (
        <ExpenseItems key={expenseData.id}
        title={expenseData.title} 
        amount={expenseData.amount}
        date={expenseData.date}/>))}
        </ul>
    )
   
}

export default ExpensesList