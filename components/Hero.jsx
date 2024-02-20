import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden bg-primary/5">
      <div className="container mx-auto h-full relative">
        <div className="flex items-center justify-between h-full">
          {/* Imagem */}
          <div className="hidden xl:flex h-full absolute inset-0 z-0 opacity-50">
            <Image
              src="/bg/hero2.png"
              layout="fill"
              objectFit="cover"
              alt="logo dmarks"
              quality={100}
            />
          </div>
          {/* Texto */}
          <div className="w-full xl:max-w-[500px] flex flex-col justify-center items-start absolute z-10">
            <h1>
              Locação de Móveis    
            </h1> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
