import DisplayWeather from "./displayWeather"
const Weather=()=>{
    let wInfo={
        city : "Pondicherry",
        temp : 50
    }
    return(
        <DisplayWeather cWea={wInfo}/>
    )
}

export default Weather