
const Child=({number,array,obj})=>{
    return(
        <div>
           <p> This child number {number}</p>
        <h2>{array}</h2>
           <p>object age {obj.age}</p>
           <p>object name {obj.name}</p>
        </div>
    )
}

export default Child;