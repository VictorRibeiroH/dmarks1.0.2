"use client";

import React, { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaCouch, FaTrashAlt, FaChair, FaBuffer } from "react-icons/fa";
import { PiArmchairFill } from "react-icons/pi";
import {
  MdChairAlt,
  MdTableBar,
  MdTableRestaurant,
  MdCountertops,
} from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { LuRefrigerator } from "react-icons/lu";
import { SiAirtable, SiAccenture } from "react-icons/si";
import { GiCube } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import Item from "./Item";
import SearchBar from "./SearchBar";

const Categories = ({ bikes }) => {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch =
        category === "all" || !bike.categories // Adicionando verificação de bike.categories
          ? true
          : bike.categories.some((categ) => categ.name === category);
      const searchMatch =
        (bike.name ?? "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (bike.description ?? "").toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && (searchTerm === "" || searchMatch);
    });
    setFilteredBikes(filtered);
  }, [category, bikes, searchTerm]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <SearchBar handleSearch={handleSearch} />
          <aside
            className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed bottom-0 hidden md:block"
            style={{ position: "sticky" }}
          >
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              {/* Códigos das categorias omitidos para brevidade */}
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => handleCategoryChange("all")}
                  style={{ display: "none" }} // Estilize o RadioGroupItem aqui
                />
                <label className="cursor-pointer" htmlFor="all">
                  Todas
                </label>
              </div>
              {/* começa aqui categorias */}

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Acessórios"
                  id="Acessórios"
                  onClick={() => handleCategoryChange("Acessórios")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <SiAccenture />
                <label
                  className="cursor-pointer"
                  htmlFor="Acessórios"
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
                    Acessórios
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Aparadores"
                  id="Aparadores"
                  onClick={() => handleCategoryChange("Aparadores")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <FaBuffer  />
                <label
                  className="cursor-pointer"
                  htmlFor="Aparadores"
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
                    Aparadores
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Balcões"
                  id="Balcões"
                  onClick={() => handleCategoryChange("Balcões")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <MdCountertops  />
                <label
                  className="cursor-pointer"
                  htmlFor="Balcões"
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
                    Balcões
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Banquetas"
                  id="Banquetas"
                  onClick={() => handleCategoryChange("Banquetas")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <MdChairAlt  />
                <label
                  className="cursor-pointer"
                  htmlFor="Banquetas"
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
                    Banquetas
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Cadeiras"
                  id="Cadeiras"
                  onClick={() => handleCategoryChange("Cadeiras")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <FaChair  />
                <label
                  className="cursor-pointer"
                  htmlFor="Cadeiras"
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
                    Cadeiras
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Lixeiras"
                  id="Lixeiras"
                  onClick={() => handleCategoryChange("Lixeiras")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <FaTrashAlt  />
                <label
                  className="cursor-pointer"
                  htmlFor="Lixeiras"
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
                    Lixeiras
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Bistrôs"
                  id="Bistrôs"
                  onClick={() => handleCategoryChange("Bistrôs")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <MdTableBar  />
                <label
                  className="cursor-pointer"
                  htmlFor="Bistrôs"
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
                    Mesas Bistrôs
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Mesas"
                  id="Mesas"
                  onClick={() => handleCategoryChange("Mesas")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <MdTableRestaurant  />
                <label
                  className="cursor-pointer"
                  htmlFor="Mesas"
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
                    Mesas de Centro
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Atendimento"
                  id="Atendimento"
                  onClick={() => handleCategoryChange("Atendimento")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <SiAirtable  />
                <label
                  className="cursor-pointer"
                  htmlFor="Atendimento"
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
                    Mesas de Reunião
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Poltronas"
                  id="Poltronas"
                  onClick={() => handleCategoryChange("Poltronas")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <PiArmchairFill  />
                <label
                  className="cursor-pointer"
                  htmlFor="Poltronas"
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
                    Poltronas
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Puffs"
                  id="Puffs"
                  onClick={() => handleCategoryChange("Puffs")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <GiCube  />
                <label
                  className="cursor-pointer"
                  htmlFor="Puffs"
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
                    Puffs
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Plantas"
                  id="Plantas"
                  onClick={() => handleCategoryChange("Plantas")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <RiPlantFill />
                <label
                  className="cursor-pointer"
                  htmlFor="Plantas"
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
                    Plantas
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>

              
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Refrigeração"
                  id="Refrigeração"
                  onClick={() => handleCategoryChange("Refrigeração")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <LuRefrigerator  />
                <label
                  className="cursor-pointer"
                  htmlFor="Refrigeração"
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
                    Refrigeração
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>
             
             
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Sofás"
                  id="Sofás"
                  onClick={() => handleCategoryChange("Sofás")}
                  className="radio-item"
                  style={{ display: "none" }}
                />
                <FaCouch  />
                <label
                  className="cursor-pointer"
                  htmlFor="Sofás"
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
                    Sofás
                  </span>
                </label>
                <style jsx>{`
                  label:hover span {
                    color: #1885ad;
                  }
                `}</style>
              </div>
            </RadioGroup>
          </aside>
          <div
            className="w-full xl:w-[1050px] ml-auto flex flex-wrap justify-start gap-4"
            style={{ marginTop: "-648px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {filteredBikes.map((bike) => {
                return <Item bike={bike} key={bike.price_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
