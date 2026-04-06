import { useState } from "react"

const Counter=()=>{
    let [count,setCount]=useState(0);

    return(
        <div>
            <button onClick={()=>{
                setCount(count+1);
            }}>+</button>
            <br />
            {count}
            <br />
            <button onClick={()=>{
                setCount(count-1);
            }}>-</button>
            <br />
            <button onClick={()=>{
                setCount(0);
            }}> reset</button>
        </div>
    )
}

export default Counter