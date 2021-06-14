import React from 'react';
import './App.css';
import { render } from 'react-dom';
import axios from 'axios';
import { useState } from 'react';






const Weather = () => {
    const [temperature, setTemperature] = useState("");
    const [city, setCity] = useState("Albuquerque");
    

    const getWeatherData = (city) => {
        axios({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={970959e02f7ab86075acd5469764f68d}`,

        })
            .then((response) => {
                console.log(response.data.main.temp);
                setTemperature(response.data.main.temp)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div style={{ marginLeft: "33%" }}>
                <div
                    style={{
                        height: "150px",
                        width: "450px",
                        backgroundColor: 'turquoise',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "25px",
                    }}
                >
                    <br />
                    {city} Weather
                    <br />
                    {temperature}
                </div>
                <br />
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                
                <button
                    onClick={() => {
                        getWeatherData(city);
                    }}
                >
                    GET
                    </button>
            </div>
           
        </>
    );
};

render(<Weather />, document.querySelector("#root"));

export default Weather