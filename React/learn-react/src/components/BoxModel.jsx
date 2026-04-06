import Child from "./Child";

const BoxModel=({num})=>{
     let name = "Balaji";
     let arr=[2,3,4];
     let object={
        name:"Balaji",
        age: 12

     }
      
return(    
    <div className="">
        <p>This is {name}</p>
        <p>{num}</p>
        <Child number={num} array={arr} obj={object}/>
    </div>
)
}

export default BoxModel;