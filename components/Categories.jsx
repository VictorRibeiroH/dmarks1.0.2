"use client"

import React, { useState, useEffect } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FaCouch, FaTrashAlt, FaChair, FaBuffer } from "react-icons/fa"
import { PiArmchairFill } from "react-icons/pi"
import {
  MdChairAlt,
  MdTableBar,
  MdTableRestaurant,
  MdCountertops,
} from "react-icons/md"
import { BsCollectionFill } from "react-icons/bs"
import { LuRefrigerator } from "react-icons/lu"
import { SiAirtable, SiAccenture } from "react-icons/si"
import { GiCube } from "react-icons/gi"
import { RiPlantFill } from "react-icons/ri"
import Item from "./Item"
import SearchBar from "./SearchBar"

const Categories = ({ bikes }) => {
  const [category, setCategory] = useState({
    value: "all",
    name: "Todos os Itens",
  })
  const [filteredBikes, setFilteredBikes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isClick, setIsClick] = useState(false)

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch =
        category.value === "all" || !bike.categories
          ? true
          : bike.categories.some((categ) => categ.name === category.value)
      const searchMatch =
        (bike.name ?? "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (bike.description ?? "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      return categoryMatch && (searchTerm === "" || searchMatch)
    })
    setFilteredBikes(filtered)
  }, [category, bikes, searchTerm])

  const handleCategoryChange = (value, name) => {
    setCategory({ value, name })
    setIsClick(false)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const toggleSelect = () => {
    setIsClick(!isClick)
  }

  const handleItemClick = () => {
    setIsClick(false)
  }

  const categories = [
    { value: "all", name: "Todos os Itens", icon: null },
    { value: "Acessórios", name: "Acessórios", icon: <SiAccenture /> },
    { value: "Aparadores", name: "Aparadores", icon: <FaBuffer /> },
    { value: "Balcões", name: "Balcões", icon: <MdCountertops /> },
    { value: "Banquetas", name: "Banquetas", icon: <MdChairAlt /> },
    { value: "Cadeiras", name: "Cadeiras", icon: <FaChair /> },
    { value: "Lixeiras", name: "Lixeiras", icon: <FaTrashAlt /> },
    { value: "Bistrôs", name: "Mesas Bistrôs", icon: <MdTableBar /> },
    { value: "Mesas", name: "Mesas de Centro", icon: <MdTableRestaurant /> },
    { value: "Atendimento", name: "Mesas de Reunião", icon: <SiAirtable /> },
    { value: "Poltronas", name: "Poltronas", icon: <PiArmchairFill /> },
    { value: "Puffs", name: "Puffs", icon: <GiCube /> },
    { value: "Plantas", name: "Plantas", icon: <RiPlantFill /> },
    { value: "Refrigeração", name: "Refrigeração", icon: <LuRefrigerator /> },
    { value: "Sofás", name: "Sofás", icon: <FaCouch /> },
  ]

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto relative">
        <div className="flex flex-col">
          <SearchBar handleSearch={handleSearch} />
          <button
            onClick={toggleSelect}
            className="p-2 bg-white px-10 sticky top-[8rem] z-40 max-w-[400px] mx-auto mt-4 border-solid border-2 rounded md:hidden"
          >
            {category.name}
          </button>
          {isClick && (
            <div className="sticky top-[11rem] bg-white z-40 px-10 mx-auto pb-4 max-h-[400px] overflow-y-auto">
              <RadioGroup
                defaultValue="all"
                className="flex mt-4 flex-col gap-6 mb-12"
              >
                {categories.map(({ value, name, icon }) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={value}
                      id={value}
                      onClick={() => handleCategoryChange(value, name)}
                      style={{ display: "none" }}
                    />
                    {icon}
                    <label
                      className="cursor-pointer"
                      htmlFor={value}
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      <span
                        style={{
                          transition: "color 0.3s ease-in-out",
                        }}
                      >
                        {name}
                      </span>
                    </label>
                    <style jsx>{`
                      label:hover span {
                        color: #1885ad;
                      }
                    `}</style>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
          <div className="flex justify-between relative">
            <aside className="hidden md:flex mt-10 sticky top- self-start">
              <RadioGroup
                defaultValue="all"
                className="flex flex-col gap-6 mb-12"
              >
                {categories.map(({ value, name, icon }) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={value}
                      id={value}
                      onClick={() => handleCategoryChange(value, name)}
                      style={{ display: "none" }}
                    />
                    {icon}
                    <label
                      className="cursor-pointer"
                      htmlFor={value}
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      <span
                        style={{
                          transition: "color 0.3s ease-in-out",
                        }}
                      >
                        {name}
                      </span>
                    </label>
                    <style jsx>{`
                      label:hover span {
                        color: #1885ad;
                      }
                    `}</style>
                  </div>
                ))}
              </RadioGroup>
            </aside>
            <div className="max-w-[75%] mt-10 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                {filteredBikes.map((bike) => (
                  <div onClick={handleItemClick} key={bike.price_id}>
                    <Item bike={bike} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
