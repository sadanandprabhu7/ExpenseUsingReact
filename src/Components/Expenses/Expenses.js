import React,{useState} from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpenseFilter from "./ExpenseFilter";
const Expenses=(props)=>
{
  const [filteredYear,setFiltredYear]= useState("2023")
  const filterChangeHandler =(selectedYear)=>{
    setFiltredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  })
   return(
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          {filteredExpenses.map(expenseData=> (<ExpenseItems key={expenseData.id} title={expenseData.title} amount={expenseData.amount}date={expenseData.date}/>))}
      </Card>
    )
} 
export default Expenses;