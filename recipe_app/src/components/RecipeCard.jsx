import React from 'react';

const RecipeCard = ({ recipe, toggleFavorite }) => {
    const handleToggleFavorite = () => {
        toggleFavorite(recipe.id); // Assuming each recipe has a unique identifier like 'id'
    };

    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{recipe.name}</h3>
            <p style={styles.info}>Category: {recipe.category}</p>
            <p style={styles.info}>Ingredients: {recipe.ingredients.join(', ')}</p>
            {recipe.image && (
                <img src={recipe.image} alt={recipe.name} style={styles.image} />
            )}
            <button onClick={handleToggleFavorite}>
                {recipe.favorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        maxWidth: '300px',
        backgroundColor: '#fff',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
    },
    info: {
        fontSize: '16px',
        marginBottom: '5px',
        color: '#666',
    },
    image: {
        maxWidth: '100%',
        borderRadius: '8px',
        marginTop: '10px',
    },
};

export default RecipeCard;
