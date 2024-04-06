// FavoriteRecipes.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const FavoriteRecipes = ({ favoriteRecipes, toggleFavorite }) => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>Favorite Recipes</h1>
                <Link to="/RecipeList" style={styles.link}>Go back to Recipe List</Link>
                <div style={styles.recipeContainer}>
                    {favoriteRecipes.length === 0 ? (
                        <p style={styles.emptyMessage}>No favorite recipes yet.</p>
                    ) : (
                        favoriteRecipes.map((recipe, index) => (
                            <RecipeCard key={index} recipe={recipe} toggleFavorite={() => toggleFavorite(index)} />
                        ))
                    )}
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
    title: {
        marginBottom: '20px',
        fontSize: '28px',
        fontWeight: 'bold',
    },
    link: {
        marginBottom: '20px',
        textDecoration: 'none',
        color: '#007bff',
        fontSize: '16px',
    },
    recipeContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    emptyMessage: {
        fontStyle: 'italic',
        color: '#888',
    },
};

export default FavoriteRecipes;

