import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './NavBar.css';


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    
    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}> Albuquerque Valley Harvest<i className="fas fa-pepper-hot" />
                    
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/growers' className='nav-links' onClick={closeMobileMenu}>
                                Growers
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/recipes' className='nav-links' onClick={closeMobileMenu}>
                                Recipes
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/weather' className='nav-links' onClick={closeMobileMenu}>
                                Weather
                            </Link>
                        </li>
                        
                    
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Grower Sign Up
                        </Button>}

                           
                 </div>
            </nav>        
        </>
    );
    
}

export default NavBar