import { useState } from "react";

const ExampleState=()=>{
    let [age,setAge]=useState(30);
    let [meg,setMsg]=useState('hello all')
    
  
    const handleClick=(event)=>{
        console.log(event);
          setAge(34);
          setMsg('updated msg')
        
    }
    return(
       <div>
        <p>{age}</p>
        <p>{meg}</p>
         <button onClick={handleClick}> Age Update</button>
       </div>
    )
}
export default ExampleState;