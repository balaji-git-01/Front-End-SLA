const StudentList=()=>{
    let students = ["Balaji","Raji","Gopal"];
return(
    <div>
        {
            students.map((student,index)=>(
                <p key={index}>{student}</p>
            ))
        }
    </div>

)
}

export default StudentList;