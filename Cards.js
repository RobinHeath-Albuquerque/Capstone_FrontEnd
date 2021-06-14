import React from 'react';
import CardItem from './CardItems';
import './Cards.css';
import img1 from '../Images/Farmers.jpg';
import img2 from '../Images/Recipes.jpg';
import img3 from '../Images/Weather.jpg';


function Cards() {
    return (
        <div className='cards'>
            <h1>More to Explore!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                     <CardItem
                            src={img1} alt="Farmers Market"
                            text="New Mexico Local Farmers"
                            label='Growers'
                            path='/growers'
                        />  
                        <CardItem
                            src={img2} alt="Recipes"
                            text="Delicous Recipes"
                            label='Recipes'
                            path='/recipes'
                        />  
                        <CardItem
                            src={img3} alt="Weather"
                            text="Albuquerque Weather"
                            label='Weather'
                            path='/weather'
                        />  
                     </ul>
                 </div>
             </div>
         </div>
        );
}

export default Cards