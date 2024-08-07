"use client"

import { useState } from "react"
import { urlFor } from "@/app/lib/sanity"
import Image from "next/image"
import { CgEye, CgShoppingBag } from "react-icons/cg"
import AddToCartBtn from "./AddToCartBtn"

const Item = ({ bike }) => {
  const popularBikeCat = (bike.categories || []).find(
    (bike) => bike.name === "Popular"
  )

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* Badges */}
          {popularBikeCat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          )}
          {bike.images && bike.images.length > 0 && (
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
        {/* btnss */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100">
          <AddToCartBtn
            id={bike._id}
            name={bike.name}
            currency="USD"
            description={bike.description}
            images={bike.images}
            price={bike.price}
            btnStyles="btn-icon bg-accent"
            icon={<CgShoppingBag />}
          />
          <button
            onClick={toggleModal}
            className="btn-icon btn-primary"
            style={{ cursor: "pointer" }}
          >
            <CgEye />
          </button>
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold mb-2">
        {bike.categories &&
          bike.categories.length > 0 &&
          bike.categories[0].name}
      </h5>
      <h4 className="mb-1">{bike.name}</h4>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-8 rounded-lg flex flex-col items-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-transparent border-none cursor-pointer text-gray-700 text-lg p-2 rounded hover:bg-blue-500 hover:text-white transition-all duration-300"
              onClick={toggleModal}
            >
              Fechar
            </button>
            <Image
              src={urlFor(bike.images[0]).url()}
              width={400}
              height={250}
              alt=""
            />
            <h2 className="text-2xl font-semibold my-4">{bike.name}</h2>
            <p className="text-gray-700 mb-4">{bike.description}</p>
            <AddToCartBtn
              id={bike._id}
              name={bike.name}
              currency="USD"
              description={bike.description}
              images={bike.images}
              price={bike.price}
              btnStyles="btn btn-accent"
              icon={<>Adicione ao seu carrinho</>}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Item
