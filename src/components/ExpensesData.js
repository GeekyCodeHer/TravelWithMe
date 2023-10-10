import React,{useState} from "react";
import Expenses from './Myexpenses';
import ExpenseForm from "./ExpensesForm";
import Chart from "./Chart";
let expenses=[
    {
      id:"e1",
      title:"rent",
      date: new Date("2022-06-25"),
      amount: 20000
    },
    {
      id:"e2",
      title:"grocery",
      date: new Date("2023-04-12"),
      amount: 5000
    },
    {
      id:"e3",
      title:"bank",
      date: new Date("2024-03-25"),
      amount: 80000
    },
    {
      id:"e3",
      title:"bank",
      date: new Date("2024-05-25"),
      amount: 70000
    }
  ]
const ExpensesData=({yearFilter})=>{
    const [expense,setExpense]=useState(expenses);
    const setNewExpense=(newdata)=>{
        // setExpense(expenses.push(newdata)); normal way of pushing obj into array
        // add object inside array of objects by returning array of new object and previous data too
        setExpense((prevExp)=>{
           return [newdata, ...prevExp]
        })
      }

      const filteredExpenses = expense.filter((expense) => {
        console.log(expense.date,"hiiiii");
          var date = new Date(expense.date)
          return [date.getFullYear()];
        // return expense.date.getFullYear().toString() === yearFilter;
      });

    return(
        <>
        <div>
       {expense.map((index,key) =>(
        <Expenses myExpense={index} key={key} yearFilter={yearFilter}/>
        ))}
        </div>
        <ExpenseForm getNewExpense={setNewExpense}/>
        <Chart expenseValue={filteredExpenses}/>
        </>
    );
}
export default ExpensesData;