import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden bg-grey flex justify-center items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-full">
          {/* Imagem */}
          <div className="hidden xl:flex h-[650px] w-full absolute inset-0 z-0 opacity-50">
            <Image
              src="/bg/bg-hero-vf.jpg"
              layout="fill"
              objectFit="cover"
              alt="logo dmarks"
              quality={100}
            />
          </div>
          {/* Texto */}
          <div className="w-full xl:max-w-[500px] flex flex-col justify-center items-center absolute z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center">
              Locação de Móveis    
            </h1> 
            <h2>Para feiras e eventos</h2> 
            <span className="text-lg text-center font-semibold">A satisfação do seu cliente é o melhor projeto para a sua empresa</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
