import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes_Bookmarks = ({ recipes_bookmarks, handleAddRecipes_Bookmarks, bookmark, preparing_time }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('recipes')) || recipes_bookmarks);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    setRecipes(JSON.parse(localStorage.getItem('recipes')) || recipes_bookmarks);
  }, []);

  useEffect(() => {
    setRecipes(recipes_bookmarks);
  }, [recipes_bookmarks]);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleAddToBookmark = (recipe) => {
    if (bookmarks.some(data => data.recipe_id === recipe.recipe_id)) {
      toast.error('Already exists', {
        className: 'custom-toast',
      });
      return;
    }
    setBookmarks(prevBookmarks => [...prevBookmarks, recipe]);
    const updatedRecipes = recipes.filter(data => data.recipe_id !== recipe.recipe_id);
    setRecipes(updatedRecipes);
    handleAddRecipes_Bookmarks(updatedRecipes);
  };

  const handleRemoveFromBookmark = (recipe) => {
    if (recipes.some(data => data.recipe_id === recipe.recipe_id)) {
      toast.error('Already exists', {
        className: 'custom-toast',
      });
      return;
    }

    setBookmarks(prevBookmarks => prevBookmarks.filter(data => data.recipe_id !== recipe.recipe_id));
    const updatedRecipes = [...recipes, recipe];
    setRecipes(updatedRecipes);
    handleAddRecipes_Bookmarks(updatedRecipes);
    

  };

  return (
    <main className='mt-4'>
      <ToastContainer />
      <div className='text-center lg:w-auto md:w-auto w-80 p-4 border-2 rounded-2xl'>
        <h2 className='text-2xl font-bold mb-6 border-b-2'>
          Want to cook: {recipes.length}
        </h2>
        <table className="lg:w-[500px] md:w-[500px] w-60 text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className='text-xs uppercase dark:text-gray-400'>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipes.map(bookmark => (
              <tr key={bookmark.recipe_id}>
                <td>{bookmark.recipe_name}</td>
                <td>{bookmark.preparing_time}</td>
                <td>{bookmark.calories}</td>
                <td>
                  <button
                    onClick={() => handleAddToBookmark(bookmark)}
                    className='px-4 py-2 rounded-full hover:text-fuchsia-950 font-medium text-black bg-slate-100 hover:bg-green-500'
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className='text-2xl font-bold mb-6 mt-10 border-b-2'>
          Currently cooking: {bookmarks.length}
        </h2>
        <table className="lg:w-[500px] md:w-[500px] w-60 text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className='text-xs uppercase dark:text-gray-400'>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map(bookmark => (
              <tr key={bookmark.recipe_id}>
                <td>{bookmark.recipe_name}</td>
                <td>{bookmark.preparing_time}</td>
                <td>{bookmark.calories}</td>
                <td>
                  <button
                    onClick={() => handleRemoveFromBookmark(bookmark)}
                    className='px-4 py-2 rounded-full font-medium text-black bg-slate-100 hover:bg-red-500 hover:text-white'
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Recipes_Bookmarks;
