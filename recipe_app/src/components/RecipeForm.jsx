import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RecipeForm = ({ onAddRecipe }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
            setImage(file);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            name,
            category,
            ingredients: ingredients.split(',').map(ingredient => ingredient.trim()), // Split ingredients by comma and trim whitespace
            image: previewImage
        };
        onAddRecipe(newRecipe);
        // Clear form fields
        setName('');
        setCategory('');
        setIngredients('');
        setImage('');
        setPreviewImage('');
    };

    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '400px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Recipe</h2>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="name" style={{ marginBottom: '5px' }}>Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required style={{ marginBottom: '15px', padding: '5px' }} />
                
                <label htmlFor="category" style={{ marginBottom: '5px' }}>Category:</label>
                <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required style={{ marginBottom: '15px', padding: '5px' }} />
                
                <label htmlFor="ingredients" style={{ marginBottom: '5px' }}>Ingredients:</label>
                <input type="text" id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required style={{ marginBottom: '15px', padding: '5px' }} />
                
                <label htmlFor="image" style={{ marginBottom: '5px' }}>Upload Image:</label>
                <input type="file" id="image" accept="image/*" onChange={handleImageChange} style={{ marginBottom: '15px' }} />
                
                {previewImage && (
                    <img src={previewImage} alt="Recipe Preview" style={{ maxWidth: '100%', marginBottom: '10px' }} />
                )}
                
                <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '10px' }}>Add Recipe</button>
            </form>

            <Link to="/RecipeList" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                <button style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>All Recipes</button>
            </Link>
        </div>
    );
};

export default RecipeForm;
