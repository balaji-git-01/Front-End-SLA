import { Link } from "react-router-dom"

const LoginPage=()=>{
    return (
        <div>
            <h1>Login</h1>
            <Link to={'/profile'}>Profile</Link>
        </div>
    )
}

export default LoginPage