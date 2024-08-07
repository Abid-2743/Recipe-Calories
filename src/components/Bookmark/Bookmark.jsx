import React from 'react';
import { toast } from 'react-toastify';

const Bookmark = ({ bookmark, handleAddToBookmark, handleRemoveFromBookmark }) => {
  const { recipe_name, preparing_time, calories } = bookmark;

  return (
    <div className="relative flex items-baseline overflow-x-auto">
      <table className="flex items-center mb-6 text-sm text-gray-500 dark:text-gray-400">
        <tbody className="text-xs uppercase dark:text-gray-400">
          <tr>
            <td><h2 className="w-36 mt-5">{recipe_name}</h2></td>
            <td><h2 className="w-28 mt-5">{preparing_time} mins</h2></td>
            <td><h2 className="w-6 mt-5">{calories} kcal</h2></td>
          </tr>
        </tbody>
      </table>
      <div className="mt-5">
        <button
          onClick={() => handleAddToBookmark(bookmark)}
          className='px-4 py-2 rounded-full hover:text-fuchsia-950 font-medium text-black bg-slate-100 hover:bg-green-500'
        >
          Preparing
        </button>
        <button
          onClick={() => handleRemoveFromBookmark(bookmark)}
          className='px-4 py-2 rounded-full font-medium text-black bg-slate-100 hover:bg-red-500 hover:text-white ml-2'
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Bookmark;
