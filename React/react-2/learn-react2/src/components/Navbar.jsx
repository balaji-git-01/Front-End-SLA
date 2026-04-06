import {Link} from "react-router-dom"
const Navbar=()=>{
    return(
        <div>
            <h1>Navbar</h1>
            <Link to={'/login'}>Login</Link>
            <Link to={'/profile'}>Profile</Link>
        </div>
    )
}

export default Navbar;