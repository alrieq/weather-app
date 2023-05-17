import { useState } from "react";
import './SearchBox.css';
import { click } from "@testing-library/user-event/dist/click";
import Forecast from "./Forecast";
export default function SearchBox() {
    const [cityName, setCityName] = useState("");
    const [forecasts, setForecasts] = useState([]);
    const handleKeyDown = async (event) => {
        if(event.key==='Enter' && cityName.trim().length >2){
            const URL= "https://api.weatherapi.com/v1/forecast.json?key=671a6e16e5fb4f099ae213526231705&q=" + cityName+ "&days=3&aqi=no&alerts=no";
            try{
                const response = await fetch(URL, {method:"GET", headers: {Accept: 'application/json'}});
                if(!response.ok){
                    throw new Error(`Error failed to send an HTTP GET Request: ${response.status}`);
                }
                const data = await response.json();
                console.log(data.forecast.forecastday);
                setForecasts(data.forecast.forecastday);
            }catch(err){
                console.error(err)
            }
        }
    }

    function handleChange(event){
        setCityName(event.target.value);
    }

    return (
        <div>
            <input type="text"
                className="searchBox"
                placeholder="Enter City name"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <h3>weather for {cityName}</h3>
            <ul>
                {forecasts.map(function (forecast, i) {
                    return (
                        <Forecast key={i} props={forecast} />
                    )
                })
            }
            </ul>
        </div>
    )
}