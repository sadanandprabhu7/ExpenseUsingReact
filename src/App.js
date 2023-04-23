//using node 14
import ExpenseItems from "./Components/ExpenseItems";
function App() {
  const expense =[
    {title:"item1",amount:10,date:new Date(2011,2,25).toDateString,location:"lko"},
    {title:"item1",amount:10,date:new Date(2011,2,25).toDateString,location:"lko"},
    {title:"item1",amount:10,date:new Date(2011,2,25).toDateString,location:"lko"},
    {title:"item1",amount:10,date:new Date(2011,2,25).toDateString,location:"lko"}
  ]
  const expenses = expense.map((ele)=>(
    <ExpenseItems key={ele.title} title={ele.title} amount={ele.amount} date={ele.date} location={ele.location}></ExpenseItems>
  ))
    return (
      <div>
        <h2>let's get started</h2>
        {expenses}
      </div>
    );

 

}

export default App;
