"use client";

import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaCouch, FaTrashAlt, FaChair, FaBuffer   } from "react-icons/fa"; // Importe o ícone de sofá
import { PiArmchairFill } from "react-icons/pi";
import { MdChairAlt, MdTableBar, MdTableRestaurant, MdCountertops  } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { LuRefrigerator } from "react-icons/lu";
import { SiAirtable, SiAccenture  } from "react-icons/si";
import { GiCube } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";



import Item from "./Item";

const Categories = ({ bikes }) => {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch =
        category === "all"
          ? bikes
          : bike.categories.some((categ) => categ.name === category);
      return categoryMatch;
    });
    setFilteredBikes(filtered);
  }, [category, bikes]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
        <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed bottom-0" style={{position: 'sticky'}}>
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
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
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <SiAccenture  />
                <label className="cursor-pointer" htmlFor="Acessórios">
                  Acessórios
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Aparadores"
                  id="Aparadores"
                  onClick={() => handleCategoryChange("Aparadores")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <FaBuffer  />
                <label className="cursor-pointer" htmlFor="Aparadores">
                  Aparadores
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Balcões"
                  id="Balcões"
                  onClick={() => handleCategoryChange("Balcões")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <MdCountertops  />
                <label className="cursor-pointer" htmlFor="Balcões">
                  Balcões
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Balcões"
                  id="Balcões"
                  onClick={() => handleCategoryChange("Balcões")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <MdChairAlt />
                <label className="cursor-pointer" htmlFor="Balcões">
                  Banquetas
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Cadeiras"
                  id="Cadeiras"
                  onClick={() => handleCategoryChange("Cadeiras")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <FaChair  />
                <label className="cursor-pointer" htmlFor="Cadeiras">
                  Cadeiras
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Lixeiras"
                  id="Lixeiras"
                  onClick={() => handleCategoryChange("Lixeiras")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <FaTrashAlt />
                <label className="cursor-pointer" htmlFor="Lixeiras">
                  Lixeiras
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Bistrôs"
                  id="Bistrôs"
                  onClick={() => handleCategoryChange("Bistrôs")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <MdTableBar />
                <label className="cursor-pointer" htmlFor="Bistrôs">
                  Mesas Bistrôs
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Mesas"
                  id="Mesas"
                  onClick={() => handleCategoryChange("Mesas")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <MdTableRestaurant /> 
                <label className="cursor-pointer" htmlFor="Mesas">
                  Mesas de Centro
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Atendimento"
                  id="Atendimento"
                  onClick={() => handleCategoryChange("Atendimento")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <SiAirtable />
                <label className="cursor-pointer" htmlFor="Atendimento">
                  Mesas de Reunião
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Poltronas"
                  id="Poltronas"
                  onClick={() => handleCategoryChange("Poltronas")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <PiArmchairFill />

                <label className="cursor-pointer" htmlFor="Poltronas">
                  Poltronas
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Puffs"
                  id="Puffs"
                  onClick={() => handleCategoryChange("Puffs")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <GiCube />
                <label className="cursor-pointer" htmlFor="Puffs">
                  Puffs
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Plantas"
                  id="Plantas"
                  onClick={() => handleCategoryChange("Plantas")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <RiPlantFill />
                <label className="cursor-pointer" htmlFor="Plantas">
                  Plantas
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Refrigeração"
                  id="Refrigeração"
                  onClick={() => handleCategoryChange("Refrigeração")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <LuRefrigerator />
                <label className="cursor-pointer" htmlFor="Refrigeração">
                  Refrigeração
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Sofás"
                  id="Sofás"
                  onClick={() => handleCategoryChange("Sofás")}
                  className="radio-item" // Adicione uma classe para estilizar
                  style={{ display: "none" }}
                />
                <FaCouch />
                <label className="cursor-pointer" htmlFor="Sofás">
                  Sofás
                </label>
              </div>
            </RadioGroup>
          </aside>
          {/* Listagem de bicicletas */}
          <div className="w-full xl:w-[1050px] ml-auto flex flex-wrap justify-start gap-4" style={{ marginTop: '-648px' }}> {/* Ajuste o valor de marginTop conforme necessário */}
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
