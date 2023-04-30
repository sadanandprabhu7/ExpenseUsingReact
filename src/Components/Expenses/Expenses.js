import React from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expenses.css"
const Expenses=(props)=>
{
    return(
        <Card className="expenses">
          {props.items.map(expenseData=> (<ExpenseItems key={expenseData.id} title={expenseData.title} amount={expenseData.amount}date={expenseData.date}/>))}
      </Card>
    )
} 
export default Expenses;