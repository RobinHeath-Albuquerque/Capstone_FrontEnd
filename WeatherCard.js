import React from 'react';
import './WeatherCard.css';
import WeatherItem from './WeatherItem';
import img1 from '../Images/abqWeather.PNG';
import img2 from '../Images/hiking.jpg';
import { Link } from 'react-router-dom';




function WeatherCard() {
    return (
        <div className='cards'>
            <h1>Try these recipes from our growers!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <WeatherItem
                            src={img1} alt="Albuquerque Forcast"
                            text="Local Forecast."

                        />
                        <WeatherItem
                            src={img2} alt="Hiking Trails"
                            text="Explore some trails after the market. https://www.alltrails.com/us/new-mexico/albuquerque"
                           

                        />
                    
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard