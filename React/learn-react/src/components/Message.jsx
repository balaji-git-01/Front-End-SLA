import { useState } from "react"

const Message=()=>{
    let [msg,setMsg]=useState('Welcome');
    return(
        <div>
            <button onClick={()=>{
                setMsg('You clicked the buttton')
            }}   style={{padding:'15px 35px',margin:'20px',backgroundColor:"black"}}>{msg}</button>
        </div>
    )
}

export default Message;