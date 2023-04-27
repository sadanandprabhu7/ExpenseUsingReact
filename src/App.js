//using node 14
import React from "react";
import Expenses from "./Components/Expenses/Expenses";
function App() {
  const expense =[
    {title:"item1",amount:10,date:new Date()},
    {title:"item1",amount:10,date:new Date()},
    {title:"item1",amount:10,date:new Date()},
    {title:"item1",amount:10,date:new Date()}
  ]

    return (
      <div>
        <h2>let's get started</h2>
        <Expenses items={expense}></Expenses>
      </div>
    );
}

export default App;