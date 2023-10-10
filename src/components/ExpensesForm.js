import React,{useState} from "react";


const ExpenseForm=(props)=>{
    const [Newtitle,setNewtitle]=useState('');
    const [Newdate,setNewdate]=useState('');
    const [Newamount,setNewamount]=useState('');

    const HandleTitle=(e)=>{
        e.preventDefault();
        setNewtitle(e.target.value);
    }
    // const HandleDate=(e)=>{
    //     e.preventDefault();
    //     setNewdate(e.target.value);
    // }
    // const HandleAmount=(e)=>{
    //     e.preventDefault();
    //     setNewamount(e.target.value);
    // }
    const handleSubmit=(e)=>{
        e.preventDefault();

        const NewExpense = {
            id: Newtitle,
            title : Newtitle,
            date : Newdate,
            amount :Newamount
        }
        props.getNewExpense(NewExpense);
        setNewtitle('');
        setNewdate('');
        setNewamount('');
    }
return(
<form onSubmit={handleSubmit}>
<div>
    <input type='text' value={Newtitle} onChange={HandleTitle}/>
    <input type='date' value={Newdate} onChange={(e)=>setNewdate(e.target.value)}/>
    <input type="number" value={Newamount} onChange={(e)=>setNewamount(e.target.value)}/>
</div>
    <button type="submit">Add Expense</button>
</form>
);
}

export default ExpenseForm;