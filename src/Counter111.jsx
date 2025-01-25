import { useState } from "react";

export default function Counter111(){
    let [count, setCount] = useState(0);
    console.log("component is rerender!");
    console.log(`count = ${count}`);

    let increment= ()=> {
        setCount(count+1);
    }

    let decrement = () => {
        setCount(count-1);
    };

    let reset = () => {
        setCount(count= 0)
    }

    return(
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h3>Count = {count}</h3>
            <button onClick={increment} style={{ margin: "5px" }} disabled={count==10} >Increase Count</button>
            <button onClick={decrement} style={{ margin: "5px" }} disabled={count==0}>Decrease Count</button>
            <button onClick={reset} style={{ margin: "5px" }}>Reset</button>
        </div>
    )
}