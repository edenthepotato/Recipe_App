import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import FavoriteRecipes from './components/FavoriteRecipes';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const handleAddRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    const toggleFavorite = (index) => {
        const updatedRecipes = [...recipes];
        updatedRecipes[index].favorite = !updatedRecipes[index].favorite;
    
        const updatedRecipe = updatedRecipes[index];
    
        if (updatedRecipe.favorite) {
            console.log("Adding to favorites:", updatedRecipe);
            setFavoriteRecipes([...favoriteRecipes, updatedRecipe]);
        } else {
            console.log("Removing from favorites:", updatedRecipe);
            setFavoriteRecipes(favoriteRecipes.filter(recipe => recipe.id !== updatedRecipe.id));
        }
    
        setRecipes(updatedRecipes);
    };
    
    

    return (
        <Router>
            <Routes>
                <Route path="/RecipeForm" element={<RecipeForm onAddRecipe={handleAddRecipe} />} />
                <Route path="/RecipeList" element={<RecipeList recipes={recipes} toggleFavorite={toggleFavorite} />} />
                <Route path="/FavoriteRecipes" element={<FavoriteRecipes favoriteRecipes={favoriteRecipes} toggleFavorite={toggleFavorite} />} />
            </Routes>
        </Router>
    );
};

export default App;
