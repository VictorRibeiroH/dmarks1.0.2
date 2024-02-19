"use client";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Item from "./Item";

const Categories = ({ bikes }) => {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [price, setPrice] = useState(900);

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch =
        category === "all"
          ? bikes
          : bike.categories.some((categ) => categ.name === category);
      const priceMatch = bike.price <= price;
      return categoryMatch;
    });
    setFilteredBikes(filtered);
  }, [category, price, bikes]);

  console.log(filteredBikes);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory("all")}
                />
                <label htmlFor="all">Todas</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Sofás"
                  id="Sofás"
                  onClick={() => setCategory("Sofás")}
                />
                <label htmlFor="Sofás">Sofá</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Poltronas"
                  id="Poltronas"
                  onClick={() => setCategory("Poltronas")}
                />
                <label htmlFor="Poltronas">Poltronas</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Puffs"
                  id="Puffs"
                  onClick={() => setCategory("Puffs")}
                />
                <label htmlFor="Puffs">Puffs</label>
              </div>
            </RadioGroup>

        {/* Filtro Preço */}
            {/* <div className="max-w-[max-w-56]">
              <div className="text-lg mb-4 font-medium">
                Preço max:{" "}
                <span className="text-accent font-semibold ml-2">
                  R$ {price}
                </span>
                <span className="ml-2">
                  (
                  {filteredBikes.length > 1
                    ? `${filteredBikes.length} items`
                    : filteredBikes === 0
                    ? `${filteredBikes.length} items`
                    : `${filteredBikes.length} item`}
                  )
                </span>
              </div>
              <Slider
                defaultValue={[900]}
                max={1000}
                step={1}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div> */}
          </aside>
          {/* list */}
          <div className="w-full xl:w-[1050px] ml-auto">
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
