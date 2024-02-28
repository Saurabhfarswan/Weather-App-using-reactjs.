import { useEffect, useState } from "react";
import snowy from "./assets/snowy.jpg";
import star from "./assets/star.jpg";
import Description from "./Components/Description";
import {getFormattedWeatherData} from "./Components/Weatherservice";


const App = () => {
  const [city, setCity] = useState("Dehradun");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const[bg,setbg]=useState(star);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
      console.log(data);
      const threshold=units==='metric'? 20 :60;
      if(data.temp<=threshold) setbg(snowy);
      else setbg(star);
    };
    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    console.log(currentUnit);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius  ? "metric":"imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };
  
  return (
    <div className="app" style={{backgroundImage:`url(${bg})`}
    }>
      <div className="weather"> <h1>Weather-App</h1></div>
      
      <div className="overlay">
        {
          weather &&(<div className="container">
          <div className="section_inputs">
            <input onKeyDown={enterKeyPressed}type="text" name="city" placeholder="Enter city"></input>
            <button onClick={(e) => handleUnitsClick(e)}>°F</button>
          </div>
          <div className="section section_temperature">
            <div className="icon">
              <h3>{`${weather.name},${weather.country}`}</h3>
              <img src={weather.makeIconURL}
              alt="weatherIcon"
              />
              
            
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()}  ° ${units==="metric" ? "C":"F"}`}</h1>
            </div>

          </div>
          {/*bottom description*/}
          
          <Description weather={weather} units={units} />
         </div>

          )
        }
       
         
      </div>
    </div>
  );
};
export default App