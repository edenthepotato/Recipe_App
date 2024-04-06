// RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, toggleFavorite }) => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1>All Recipes</h1>
                <div style={styles.buttonContainer}>
                    <Link to="/FavoriteRecipes" style={styles.link}>View Favorite Recipes</Link>
                </div>
                <div style={styles.buttonContainer}>
                    <Link to="/RecipeForm" style={styles.link}>Add New Recipe</Link>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {recipes.map((recipe, index) => (
                        <RecipeCard
                            key={index}
                            recipe={recipe}
                            toggleFavorite={() => toggleFavorite(index)} // Ensure toggleFavorite is passed correctly
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        textAlign: 'center',
    },
    buttonContainer: {
        marginBottom: '20px',
    },
    link: {
        display: 'block',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        textDecoration: 'none',
        textAlign: 'center',
        width: '200px',
        margin: '0 auto', // Center the button horizontally
    },
};

export default RecipeList;
