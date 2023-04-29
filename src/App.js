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

    return (
      <div>
        <NewExpense/>
        <Expenses items={expense}></Expenses>
      </div>
    );
}
export default App;