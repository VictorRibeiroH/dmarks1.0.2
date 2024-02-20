import React from 'react';

const SearchBar = () => {
  return (
    <div className='relative w-full text-gray-600'>
        <input 
            className='bg-gray-200 bg-opacity-50 h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none placeholder-black'
            placeholder="Qual mobiliário você está procurando?"
        />

        <button type="submit" className='absolute right-0 top-0 mt-3 mr-4'>
            <svg
                className='h-4 w-4 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
            >
                <path 
                    fillRule='evenodd'
                    d=''
                    clipRule='evenodd'
                />
            </svg>
        </button>
    </div>
  )
}

export default SearchBar;
