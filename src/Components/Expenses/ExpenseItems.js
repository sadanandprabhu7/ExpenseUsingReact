import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import "./ExpenseItems.css"
const ExpenseItems=(props)=> {
  const [amount,setAmount]=useState(props.amount)
  const reRender=()=>{
      setAmount(100)
  }

  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}></ExpenseDate>
     <div className="expense-item__description">
     <h2>{props.title}</h2>
     <div className="expense-item__price">{amount}</div>
     </div>
     <button onClick={reRender}>upadte expense</button>
      </Card>
  );
}
export default ExpenseItems;
