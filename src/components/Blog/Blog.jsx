import React from 'react';
import { toast } from 'react-toastify';

const Blog = ({ blog, handleAddRecipes_Bookmarks }) => {
  const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = blog;

  const handleAdd = () => {
    const success = handleAddRecipes_Bookmarks(blog);
    if (!success) {
      toast.error('This recipe is already in Want to Cook.');
    }
  };

  return (
    <div className='mx-auto my-4 p-4 border rounded-2xl shadow'>
      <img src={recipe_image} alt={recipe_name} className='lg:w-full w-52 lg:h-64 h-auto object-cover rounded-t-lg'/>
      <div className=''>
        <h2 className='lg:text-2xl font-bold mb-2'>{recipe_name}</h2>
        <p className='mb-2 w-36 md:w-40 lg:w-auto border-b-2 pb-5'>{short_description}</p>
        <ul className='list-disc list-inside border-b-2 pb-5 pt-2'>
          <strong>Ingredients: 6</strong>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className='flex gap-12 pt-5'>
          <p className='text-sm mb-2'><strong><i className="fa-regular fa-clock"></i></strong> {preparing_time}</p>
          <p className='text-sm mb-2'><strong><i className="fa-solid fa-fire"></i></strong> {calories}</p>
        </div>
        <button
          onClick={handleAdd}
          className='px-4 py-2 rounded-full hover:text-fuchsia-950 font-medium text-black bg-slate-100 hover:bg-green-500'>
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default Blog;
