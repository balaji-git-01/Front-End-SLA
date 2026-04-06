const Vegetable=()=>{
    let vegetables=[
        {
        name: "carrot",
        color : "Orange",
        Price : 30
    },
    {
        name: "Beans",
        color : "Green",
        Price : 30
    }
    ]
    return(
        <div>
            {
                vegetables.map((element,index)=>(
                    <ol key={index}>
                        <li>{element.name}</li>
                        <li>{element.color}</li>
                        <li>{element.Price}</li>
                    </ol>
                ))
            }
        </div>
    )
}

export default Vegetable;