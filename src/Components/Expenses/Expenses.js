import React,{useState} from "react";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
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
          <ExpenseChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses}/>
      </Card>
    )
} 
export default Expenses;