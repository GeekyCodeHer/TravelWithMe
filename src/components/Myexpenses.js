import React, { useEffect, useState } from 'react';
import './Myexpenses.css';

const Expenses = ({myExpense,yearFilter}) => {
    const [titles,setTitle]= useState(myExpense.title);
    console.log("yearFilter",yearFilter)
    useEffect(()=>{
        setTitle(myExpense.title);
    },[myExpense])

    var expDate= myExpense.date;
    // const myExpense=myExpenses.push(myExpenses.NewData);
    if(typeof expDate === 'object'){
        var year = expDate.getFullYear();
        var month = expDate.toLocaleString('en-us',{month:'long'});
        var day = expDate.getDay();
    }else{
        function monthName(mon) {
            return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][mon - 1];
         }
        var split = expDate.split('-');
         year = +split[0];
         month = monthName(+split[1]);
         day = +split[2];
    
    }

    const HandleClick=()=>{
         setTitle("update!!!");
    }
    
    return (
        <>
        {yearFilter == year &&
        <div className='mainDiv'>
            <div className='date'>
                <div className='year'>{year}</div>
                <div className='month'>{month}</div>
                <div className='day'>{day}</div>
            </div>
            <div className='title'>
                {titles}
            </div>
            <div className='amount'>
                {myExpense.amount}
            </div>
            <button onClick={HandleClick}>Update</button>
            {/* <button onClick={HandleDelete(myExpense)}>Delete</button> */}
        </div>
        }
        </>
    );
}

export default Expenses;