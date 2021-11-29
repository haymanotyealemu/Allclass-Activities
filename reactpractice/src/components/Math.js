import React from "react";

 function Math(props){
    let value;
    if(props.operator === "+"){
        value = props.num1 + props.num2;
    }
    if(props.operator === "-"){
        value = props.num1 - props.num2;
    }
    if(props.operator === "*"){
        value = props.num1 * props.num2;
    }
    if(props.operator === "/"){
        value = props.num1 / props.num2;
    }
    
    return(
        <span style={{ fontSize: value }}> 
            {value}
        </span>
    );
    }
export default Math;