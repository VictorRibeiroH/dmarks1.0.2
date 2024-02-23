"use client";

// app/product/[slug]/page.jsx
import { useState } from 'react';
import dynamic from "next/dynamic"; // Importa a função dynamic
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { CgEye } from "react-icons/cg";

const AddToCartBtn = dynamic(() => import("@/components/AddToCartBtn")); // Importa AddToCartBtn dinamicamente

const Item = ({ bike }) => {
  const popularBikeCat = bike.categories.find(
    (bike) => bike.name === "Popular"
  );

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* Badge */}
          {popularBikeCat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          )}
          {bike.images &&
            bike.images.length > 0 && ( // Check if images exist and is not empty
              <div onClick={toggleModal} style={{ cursor: "pointer" }}>
                <Image
                  src={urlFor(bike.images[0]).url()}
                  width={240}
                  height={147}
                  alt=""
                />
              </div>
            )}
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold mb-2">
        {bike.categories[0].name}
      </h5>
      <h4 className="mb-1">{bike.name}</h4>
      {/* <div className="text-lg font-bold text-accent">R$ {bike.price}</div> */}
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div className="bg-white p-6 rounded-lg max-w-lg flex items-center">
            <div className="mr-6">
              <Image
                src={urlFor(bike.images[0]).url()}
                width={200}
                height={200}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">{bike.name}</h2>
              <p className="text-base mb-4">{bike.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
