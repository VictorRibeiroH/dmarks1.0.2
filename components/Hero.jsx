import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar"; // Importe o componente de SearchBar
import About from "./About";
import BtnProd from "./BtnProd";

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden bg-grey flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-full">
          {/* Imagem */}
          <div className="hidden xl:flex h-[800px] w-full absolute inset-0 z-0 opacity-50">
            <Image
              src="/bg/bg-cwb.jpg"
              layout="fill"
              objectFit="cover"
              alt="logo dmarks"
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Texto */}
          <div className="w-full xl:max-w-[500px] flex flex-col justify-center items-center absolute z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center">
              Locação de Móveis    
            </h1> 
            <h2 className="text-4xl">Para feiras e eventos</h2> 
            <span className="text-xl text-center font-semibold mt-4 text-gray-800 italic whitespace-nowrap">A satisfação do seu cliente é o melhor projeto para a sua empresa</span>
            {/* SearchBar */}
            {/* <SearchBar /> */}
            {/* Botão Produtos */}
            <BtnProd /> 
          </div>
        </div>
        {/* Ícone de seta para baixo */}
        {/* <div className="flex justify-center mt-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 0 1 1 1v11.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 14.586V3a1 1 0 0 1 1-1z" clipRule="evenodd" />
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
