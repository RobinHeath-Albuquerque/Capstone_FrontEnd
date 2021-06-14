import React from 'react';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Growers from './Pages/Growers';
import Recipes from './Pages/Recipes';
import Weather from './Pages/Weather';
import SignUp from './Pages/SignUp';

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/growers' exact component={Growers} />
                    <Route path='/recipes' exact component={Recipes} />
                    <Route path='/weather' exact component={Weather} />
                    <Route path='/sign-up' exact component={SignUp} />
                </Switch>
            </Router>
        </>

        
    );

}

export default App