import React from "react";
import ChartBar from "./ChartBar";
import './ChartBar.css';

const Chart=({expenseValue})=>{
    const ChartVal=[
        {label:"jan",value:0},
        {label:"feb",value:0},
        {label:"mar",value:0},
        {label:"apr",value:0},
        {label:"may",value:0},
        {label:"jun",value:0},
        {label:"jul",value:0},
        {label:"aug",value:0},
        {label:"sep",value:0},
        {label:"oct",value:0},
        {label:"nov",value:0},
        {label:"dec",value:0},
    ]
    for (const expense of expenseValue) {
       var date = new Date(expense.date)
        const expenseMonth = date.getMonth(); // starting at 0 => January => 0
        ChartVal[expenseMonth].value += expense.amount;
      }
    const array= ChartVal.map(val => val.value)
    const maxVal = Math.max(...array);
    console.log("maxVal",maxVal)
    return(
    <div className="mainCol">
      {ChartVal.map(val => <ChartBar ExpAmount={val} maxVal={'100000'} key={val.label}/>)}
    </div>
    );
}

export default Chart;