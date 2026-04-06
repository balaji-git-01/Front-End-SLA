const LoginStatus=({userD})=>{
   return(
        <div>
            {userD.isLoggedIn ? <h1>Welocme Back {userD.uName} </h1> : <h1>
                Please Log In</h1>}
        </div>
    )
}

export default LoginStatus;