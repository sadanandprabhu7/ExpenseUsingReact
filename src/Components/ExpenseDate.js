
function ExpenseDate (props)
{
    let month = props.date.toLocaleString("en-us",{month:"short"})
    let day = props.date.toLocaleString("en-us",{day:"2-digit"})
    let year = props.date.getFullYear()
return (
    <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
    </div>
)
}
export default ExpenseDate