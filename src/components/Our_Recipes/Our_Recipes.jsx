import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Our_Recipes = ({ handleAddRecipes_Bookmarks }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <main className='mx-auto'>
      <div className='grid lg:grid-cols-2 lg:gap-2'>
        {recipes.map(recipe => (
          <Blog
            key={recipe.recipe_id}
            blog={recipe}
            handleAddRecipes_Bookmarks={handleAddRecipes_Bookmarks}
          />
        ))}
      </div>
    </main>
  );
};

export default Our_Recipes;
