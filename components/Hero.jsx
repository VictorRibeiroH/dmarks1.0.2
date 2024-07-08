import Image from "next/image"
import Link from "next/link"
import About from "./About"
import BtnProd from "./BtnProd"
import ItemCollectionListHero from "./ItemCollectionListHero"

const Hero = () => {
  return (
    <section className="py-11">
      <div className="container flex-col lg:flex lg:flex-row lg:justify-between">
        <div>
          <div className="mb-5 ">
            <img
              className="mx-auto lg:mx-0 max-w-32"
              src="/dmarksLogo.png"
              alt=""
            />
          </div>
          <h1 className="text-[44px] mx-auto lg:mx-0 text-center lg:text-left lg:text-[62px] max-w-[666px] font-extrabold">
            Locação de Móveis{" "}
            <span className="underline text-accent">para feiras e eventos</span>
          </h1>
          <p className="lg:text-2xl text-center lg:text-left text-lg mx-auto lg:mx-0 mt-7 max-w-[374px] font-medium">
            A satisfação do seu cliente é o melhor projeto para a sua empresa
          </p>
          <ul className="mt-8 mb-12 flex gap-x-6 justify-center mx-auto lg:mx-0 lg:justify-start gap-y-6  flex-wrap max-w-[346px]">
            <ItemCollectionListHero nameCollection="Coleção industrial" />
            <ItemCollectionListHero nameCollection="Coleção Charles Eames" />
            <ItemCollectionListHero nameCollection="Coleção Rústica" />
            <ItemCollectionListHero nameCollection="Coleção Cromado" />
          </ul>
          <BtnProd />
        </div>
        <div>
          <div>
            <img
              className="mt-16 lg:mt-28 mx-auto lg:mx-0"
              src="/bg/bg-hero-new.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
