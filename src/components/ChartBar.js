import React from "react";
import './ChartBar.css';

const ChartBar=({ExpAmount,maxVal})=>{
    let barFillHeight = '0%';
    if(maxVal>0){

        barFillHeight = Math.round((ExpAmount.value / maxVal) * 100) + '%';
    }
    return(
        <>
            <div className="expHeight">
                <div style={{ height: barFillHeight, backgroundColor: "blue" }}></div>
            </div>
            <div>{ExpAmount.label}</div>
            </>
    );
}

export default ChartBar;