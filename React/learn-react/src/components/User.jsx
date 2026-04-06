import { useEffect, useState } from "react"

const User=()=>{
    const [name,setName]=useState('Balaji');
    const [msg,setMsg]=useState('hello');

 /*    useEffect(()=>{
        console.log("All render")
    }) */

  /*   useEffect(()=>{
        console.log("Inital render only");
        
    },[]) */

    useEffect(()=>{
        console.log("only inital state and name chaNGE");
        
    },[msg])

    return(
        <div>
            {name} <br />
            {msg} <br />
            <button onClick={()=>{
                setName('sachin')
            }}>Name change</button>
            <br />
            <button onClick={()=>{
                setMsg('Byee')
            }}> Msg change</button>
        </div>
    )
}

export default User