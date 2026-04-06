let DisplayWeather=({cWea})=>{
    return(
      <div>
          <h3>{`current weather in ${cWea.city} is ${cWea.temp}`}</h3>
      </div>
    )
}

export default DisplayWeather;