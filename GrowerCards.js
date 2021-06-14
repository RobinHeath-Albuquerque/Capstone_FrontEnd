import React from 'react';
import './GrowerCards.css';
import GrowerItem from './GrowerItems';
import img6 from '../Images/Smith.jpg';
import img7 from '../Images/Caroline.jpg';
import img8 from '../Images/Penelope.jpg';
import img9 from '../Images/Matt.jpg';
import img10 from '../Images/Angela.jpg';
import img11 from '../Images/Tricia.jpg';
import img12 from '../Images/Hart.jpg';
import img13 from '../Images/Stacey.jpg';
import img14 from '../Images/Honey.jpg';
import img15 from '../Images/Sharon.jpg';


function GrowerCards() {
    return (
        <div className='cards'>
            <h1>Our local artesans bring their goods to you at the market!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        
                        <GrowerItem
                            src={img6} alt="David Smith"
                            text="David Smith and his daughter, Jane, are so happy to be back at the Rail Yards Market this year. Stop by soon for in-season apricots."
                            
                        />
                        <GrowerItem
                            src={img7} alt="Sweet Carolines"
                            text="Caroline MacKay is the proud owner of Sweet Carolines. A recent resident of Albuquerque, Caroline is enjoing our long growing season and is excited to be here."
                         
                        />
                    </ul>
                        <ul className='cards__items'>  
                        <GrowerItem
                            src={img8} alt="Penelope Clifford"
                            text="Penelope Clifford thinks that nothing is better than fresh food. She'll even give you a few recipes when you stop by her booth. "
                            
                        />
                        <GrowerItem
                            src={img9} alt="Matt Heath"
                            text="Matt Heath is pleased to offer organic eggs and produce. Compliment his hat and you might get a free apple!"
                          
                        />
                    </ul>
                            <ul className='cards__items'>  
                        <GrowerItem
                            src={img10}alt="Angela Garcia"
                            text="Angela Garcia operates one of the largest farms in Albuquerque. When she's not weeding her fields she's at the Rio Grande Market with a smile."
                            
                        />
                        <GrowerItem
                            src={img11}atl="Tricia Hennessee"
                            text="Tricia Hennessee has been baking since she was a child. Visit her booth on Sundays for baked goods like your grandmother made. "
                        /> 
                    </ul>
                                <ul className='cards__items'>  
                        <GrowerItem
                            src={img12}atl="Steven Hart"
                            text="Steven Hart of Hart's Bakery loves the smell of fresh baked bread in the morning. Try his green chile cheese bagels for a New Mexico treat!"
                            
                        />
                        <GrowerItem
                            src={img13}alt="Stacey Miller"
                            text="Stacey Miller offers German pancakes and strudel every Saturday and Sunday at  the Downtown Growers Market. "
                            
                        />
                    </ul>
                                    <ul className='cards__items'>  
                        <GrowerItem
                            src={img14}alt="Hudson Honey"
                            text="Hudson Honey has been a New Mexican tradition for 25 years. Specializing in honey made from local pollen; known for helping with allergies."
                            
                        /><GrowerItem
                            src={img15} alt="Alpaca Wool"
                            text="When it comes to Alpacas, Sharon Browne is the local expert. She'll invite you to her ranch where she makes all her warm and cozy wares."
                            
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default GrowerCards