const API_Key='f56e16632c051be84635e992b8c01a9c'
const makeIconURL=(iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`
const getFormattedWeatherData= async(city,units='metric')=>{
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=${units}`;
    const data=await fetch(URL)
    .then((res)=>res.json())
    .then((data)=>data);
   const{weather,main:{temp,feels_like,temp_min,temp_max,pressure,humidity},wind:{speed},
    sys:{country},
    name,
    }=data;
    const{description,icon}=weather[0];
    return{
        description,
        makeIconURL:makeIconURL(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,humidity,
        speed,
        country,
        name,

    }
     
};
export {getFormattedWeatherData};

