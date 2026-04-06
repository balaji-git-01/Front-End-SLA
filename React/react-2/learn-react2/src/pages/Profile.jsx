import {Link} from "react-router-dom"
const Profile=()=>{
    return (
        <div>
            <h1>Profile</h1>
             <Link to={'/login'}>Login</Link>
        </div>
    )
}

export default Profile