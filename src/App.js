//using node 14
import React from "react";
import Expenses from "./Components/Expenses/Expenses";

import NewExpense from "./Components/NewExpense/NewExpense";
const App=()=> {
  const expense =[
    {title:"item1",amount:10,date:new Date()},
    {title:"item1",amount:10,date:new Date()},
    {title:"item1",amount:10,date:new Date()},
    {title:"item1",amount:10,date:new Date()}
  ]
    const addNewExpenseHandler = newExpenseData => {
      console.log("inside app .js",newExpenseData)
    }
    return (
      <div>
        <NewExpense addNewExpense={addNewExpenseHandler}/>
        <Expenses items={expense}></Expenses>
      </div>
    );
}
export default App;