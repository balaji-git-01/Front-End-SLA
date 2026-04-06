import Task2 from "./Task2";
const Task1D2=()=>{
    let object={
        name:"Balaji",
        age: 24
    };
    let city="Pondicherry";
    let Pincode=605107;
    let favFood=["Briyani","Eggdosa","Mandi"];
    return(
        <Task2 obj={object} state={city} code={Pincode} Food={favFood}/>
    )
}

export default Task1D2;