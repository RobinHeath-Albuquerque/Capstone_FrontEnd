import React from 'react';
import './RecipeCards.css';
import RecipeItem from './RecipeItems';
import img1 from '../Images/acorn.jpg';
import img2 from '../Images/asparagus.png';
import img3 from '../Images/pizza.jpg';
import img4 from '../Images/salsa.jpg';
import img5 from '../Images/slaw.jpg';
import img6 from '../Images/butternut.jpg';
import img7 from '../Images/soup.jpg';
import img8 from '../Images/cider.jpg';
import img9 from '../Images/pie.jpg';



function RecipeCards() {
    return (
        <div className='cards'>
            <h1>Try these recipes from our growers!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <RecipeItem
                            src={img1} alt="acornh"
                            text="A wonderful dish filled with apples."

                        />
                        <RecipeItem
                            src={img2} alt="Asparagus"
                            text="The tangy crunch of the radish will surprise you."

                        />
                    </ul>
                    <ul className='cards__items'>
                        <RecipeItem
                            src={img3} alt="Pizza"
                            text="Pizza is best with fresh tomato sauce. "

                        />
                        <RecipeItem
                            src={img4} alt="Salsa"
                            text="Don't forget the roasted green chile!"

                        />
                    </ul>
                    <ul className='cards__items'>
                        <RecipeItem
                            src={img5} alt="Slaw"
                            text="This slaw with apples and celerey is perfect for a fall picnic."

                        />
                        <RecipeItem
                            src={img6} atl="Butternut Soup"
                            text="So good hot or cold. "
                        />
                    </ul>
                    <ul className='cards__items'>
                        <RecipeItem
                            src={img7} atl="Tomato Soup"
                            text="Perfect with a grilled cheese sandwich on artesan bread!"

                        />
                        <RecipeItem
                            src={img8} alt="Cider"
                            text="Making you warm after sledding. "

                        />
                    </ul>
                    <ul className='cards__items'>
                        <RecipeItem
                            src={img9} alt="Apple Pie"
                            text="Grandma's recipe."
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RecipeCards