"use client"

import React, { useState } from "react"

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    handleSearch(value) // Chamando a função handleSearch a cada mudança no valor do campo de entrada
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSearch(searchTerm)
  }

  return (
    <div className="flex justify-center md:flex">
      <form
        className="relative w-[100%] px-6 max-w-[900px] text-gray-600"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-gray-200 bg-opacity-50 h-10 px-5 pr-10 mt-4 w-full rounded-full text-xl focus:outline-none placeholder-black"
          placeholder="O que você precisa?"
          value={searchTerm}
          onChange={handleChange}
        />

        <button type="submit" className="absolute right-0 top-0 mt-7 mr-[40px]">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
