//using node 14
import React,{useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const DUMMYEXPENSE =[
  {id:"e1",title:"item1",amount:10,date:new Date()},
  {id:"e2",title:"item1",amount:10,date:new Date()},
  {id:"e3",title:"item1",amount:10,date:new Date()},
  {id:"e4",title:"item1",amount:10,date:new Date()}
]
const App=()=> {
  const [expense,setExpense]=useState(DUMMYEXPENSE)
    const addNewExpenseHandler = newExpenseData => {
      setExpense((preState)=>{
        return [newExpenseData,...preState] 
      })
    }
    return (
      <div>
        <NewExpense addNewExpense={addNewExpenseHandler}/>
        <Expenses items={expense}></Expenses>
      </div>
    );
}
export default App;