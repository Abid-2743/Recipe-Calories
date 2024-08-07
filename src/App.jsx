import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Header_Nav from './components/Header_Nav/Header_Nav';
import Recipes from './components/Our Recipes/Recipes';
import Recipes_Bookmarks from './components/Recipes Bookmarks/Recipes_Bookmarks';
import Our_Recipes from './components/Our_Recipes/Our_Recipes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes_bookmarks, setRecipes_Bookmarks] = useState([]);

  const handleAddRecipes_Bookmarks = recipe => {
    if (recipes_bookmarks.some(item => item.recipe_id === recipe.recipe_id)) {
      return false;
    }
    const newRecipes_Bookmarks = [...recipes_bookmarks, recipe];
    setRecipes_Bookmarks(newRecipes_Bookmarks);
    return true;
  };

  return (
    <>
      <Header />
      <Header_Nav />
      <Recipes />
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 lg:gap-5 justify-center lg:mx-32'>
        <Our_Recipes handleAddRecipes_Bookmarks={handleAddRecipes_Bookmarks} />
        <Recipes_Bookmarks recipes_bookmarks={recipes_bookmarks} handleAddRecipes_Bookmarks={setRecipes_Bookmarks} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
