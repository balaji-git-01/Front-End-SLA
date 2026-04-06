import LoginStatus from "./LoginStatus";
const Login = () => {
  // let islogedIn=true;
   let user={
        uName:"Balaji",
        isLoggedIn : false
    }
  return (
    <div>{/*     /*  <h1>Log in</h1> */}

        <LoginStatus userD={user}/>
    
    </div>
    /* <button>{islogedIn ? <h1>Logout</h1> : <h1>Log |In</h1> }</button> */
  );
};

export default Login;
