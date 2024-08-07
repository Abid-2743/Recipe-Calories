import React from 'react';

const Header = () => {
    return (
        <header className='p-4 '>
            <nav className='flex items-center justify-between flex-wrap'>
                <div className='flex items-center justify-between w-full sm:w-auto'>
                    <a className='font-bold text-3xl text-fuchsia-950' href="">Recipe Calories</a>
                    <button className='block sm:hidden p-2 rounded-md focus:outline-none'>
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                <ul className='hidden sm:flex justify-center gap-10 space-x-4 w-full sm:w-auto'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#recipes">Recipes</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#search">Search</a></li>
                </ul>
                <div className='flex items-center justify-end w-full sm:w-auto'>
                    <input 
                        type="search" 
                        placeholder="Search "
                        aria-label="Search recipes" 
                        className='mr-4 p-2 px-5 rounded-3xl bg-slate-200 w-full sm:w-auto'
                    />
                    <i className="fa-regular fa-user bg-green-500 p-4 rounded-full hidden sm:block"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
