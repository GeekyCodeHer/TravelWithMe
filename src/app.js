import React,{useState} from "react";
import ExpensesFilter from "./components/ExpensesFilter";
import ExpensesData from "./components/ExpensesData";
import './components/Myexpenses.css';
//App component is the initial component so we can use it as routing component
console.log("React",React);

function App() {
  const [filters,setFilters]=useState('2023');

  const HandleFilterSelector=(year)=>{
    setFilters(year);
  }
  const xyz=(index)=>{
console.log(index,"index")
  }
    return (
      <>
    <div className="parent_div">
    </div>
    <ExpensesFilter OnSelectFilter={HandleFilterSelector} data={xyz}  placeVal={filters}/>
    <ExpensesData yearFilter={filters}/>
    </>
    );
  }
  
export default App;