//import React from 'react'
import "./Description.css";
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa';
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";




// ... (previous imports)

const Description = ({ weather, units }) => {
    const tempUnit = units === 'metric' ? ' °C' : ' °F';
    const windUnit = units === 'metric' ? 'm/s' : 'm/h';
    const cards = [
      {
        id: 1,
        Icon: <FaArrowDown />,
        title: "Min",
        data: weather.temp_min.toFixed(),
        unit: tempUnit,
      },
      {
        id: 2,
        Icon: <FaArrowUp />,
        title: "Max",
        data: weather.temp_max.toFixed()  ,
        unit: tempUnit,
      },
      {
        id: 3,
        Icon: <BiHappy />,
        title: "Feels_like",
        data: weather.feels_like.toFixed(),
        unit: tempUnit,
      },
      {
      id: 4,
      Icon: <MdCompress />,
      title: "Pressure",
      data: weather.speed.toFixed(),
      unit: windUnit,
      },{
        id: 5,
        Icon: <MdOutlineWaterDrop />,
        title: "Humidity",
        data: weather.humidity,
        unit: "%",
      },
      {
        id: 6,
        Icon: <FaWind />,
        title: "Wind-speed",
        data: weather.speed.toFixed(),
        unit: windUnit,
      }

      // ... other cards
    ];
  
    return (
      <div className="section section_description">
        {cards.map(({ id, Icon, title, data, unit }) => (
          <div key={id} className="card">
            <div className="description_card-icon">
              {Icon}
              <small>{title}</small> {/* Use the title variable here */}
            </div>
            <h2>{`${data} ${unit}`}</h2>
          </div>
        ))}
      </div>
    );
  };
  

export default Description;