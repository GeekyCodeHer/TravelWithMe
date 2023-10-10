import React from "react";
import Select from 'react-select';
import './ExpensesFilter.css';

const ExpensesFilter=(props)=>{
    console.log("props",props)
    const options = [
        { value: '2022', label: '2022' },
        { value: '2023', label: '2023' },
        { value: '2024', label: '2024' }
      ];
      const HandleFilter=(event)=>{
        props.OnSelectFilter(event.value);
      };
      // added dummy to check if we can send data(variable form) from child to parent 
return(
<div className="filter_Div">
    <div>
       <p>Filter by year</p>
    </div>
    <div>
    <Select options={options} onChange={HandleFilter} placeholder={props.placeVal} dummy={props.data('supriya')}/>
    {/* <Select options={options} onChange={HandleFilter} value={props.selected}/> */}
    </div>
</div>
);
}

export default ExpensesFilter;