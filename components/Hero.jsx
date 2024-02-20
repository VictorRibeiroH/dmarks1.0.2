import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow0hidden bg-primary/5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Texto */}
          <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
            <h1>
                Locação de Móveis    
            </h1> 
          </div>
          {/* Imagem */}
          <div className="hidden xl:flex">
            <Image
              src="/bg/hero.png"
              width={765}
              height={480}
              alt="logo dmarks"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
