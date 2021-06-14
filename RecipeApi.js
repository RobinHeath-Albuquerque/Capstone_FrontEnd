import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./App.css";

const getData = async (search) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `http://www.recipepuppy.com/api/?q=${search}`;

    const response = await fetch(proxyurl + url).catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
    );
    const json = await response.json();
    return json.results;
};


const useRecipePuppyApi = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchRecipes = async () => {
            const results = await getData(search);
            setRecipes(results);
        };
        fetchRecipes();
    }, [search]);

    const doFetch = query => {
        setSearch(query);
    };

    return { recipes, doFetch };
};

function App() {
    const [ingredients, setIngredients] = useState("");
    const { recipes, doFetch } = useRecipePuppyApi();

    return (
        <div className="App">
            <div className="Header">
                <h1 className="lead">Amazing Recipes</h1>
                <form
                    onSubmit={e => {
                        doFetch(ingredients);
                        e.preventDefault();
                    }}
                >
                    <input
                        placeholder="Your favorite food"
                        onChange={e => setIngredients(e.target.value)}
                        value={ingredients}
                    />
                    <button type="submit">
                        <span>Find something tasty</span>
                        <span role="img" aria-label="avocado">
                            🥑
            </span>
                    </button>
                </form>
            </div>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.title}>
                        {recipe.thumbnail ? (
                            <img alt={recipe.title} src={recipe.thumbnail} />
                        ) : (
                                <img alt="default-meal" src="http://i65.tinypic.com/maateu.png" />
                            )}
                        <a href={recipe.href} target="_blank" rel="noopener noreferrer">
                            <span>{recipe.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);