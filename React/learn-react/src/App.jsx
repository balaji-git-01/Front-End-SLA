/* import "./App.css"; */
import BoxModel from "./components/BoxModel";
import Task1 from "./components/Ass-1/task-1";
import Task2 from "./components/Ass-1/task-2";
import Task3 from "./components/Ass-1/task-3";
import Task4 from "./components/Ass-1/task-4";
import Task5 from "./components/Ass-1/task-5";
import Login from "./components/login";
import Register from "./components/Register";
import Weather from "./components/Weather";
import Color from "./components/Color";
import Task1D2 from "./components/Ass-2/Task1D2";
import StudentList from "./components/StudentList";
import Vegetable from "./components/Vegetable";
import Table from "./components/Table";
import ExampleState from "./components/ExampleState";
import Counter from "./components/Counter";
import Message from "./components/Message";
import User from "./components/User";
import Newuser from "./components/Newuser";

function App() {
  //let number = 100;
  //let statusOfUser = "old";
  return (
    <div style={{ backgroundColor: "beige" }}>
      {/*       <BoxModel num={number} /> */}
      {/* <Task1 /> */}
      {/* <Task2 /> */}
      {/*   <Task3/> */}
      {/*   <Task4/> */}
      {/*  <Task5/> */}
      {/*     {statusOfUser === "new" ? <Register /> : <Login />} */}

      {/* <Weather/>  */}
      {/*  <Login />  */}
      {/*   <Color/> */}
      {/*      <Task1D2 /> */}
      {/*  <StudentList/> */}
      {/*     <Vegetable/> */}
      {/* <Table/> */}
      {/* <ExampleState/> */}
      {/*    <Counter/> */}
      {/*  <Message/> */}
      {/* <User/> */}
      <Newuser/>
    </div>
  );
}

export default App;
