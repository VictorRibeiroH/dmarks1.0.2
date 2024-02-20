import React from "react";

const About = () => {
  return (
    <div className="max-w-container mx-auto px-4 mt-10">
      <div className="flex pb-10">
        <div className="w-[60%] pb-10">
          <h1 className="max-w-[600px] text-base text-lightText mb-2">
            <span className="text-primeColor font-semibold text-lg">
              <span className="text-black text-4xl">DMARKS LOCAÇÕES</span>
            </span>{" "}
            <span className="text-gray-500">
              <br /><br />
              Fundada em 2002, na cidade de Curitiba/PR, a D'marks Locações é uma empresa
              especializada em locação de móveis para feiras e eventos em geral, sendo uma das
              pioneiras no ramo.
              <br /><br />
              A empresa trabalha com profissionais treinados, visando sempre a qualidade dos produtos
              e serviços prestados. Nossa principal missão é atender e satisfazer as necessidades de nossos clientes,
              buscando melhorar constantemente o atendimento e o serviço prestado, com profissionais capacitados e materiais de primeira linha
              <br /><br />
              Para manter esse compromisso, a D'marks Locações, além de toda a estrutura
              própria, possui um estoque amplo e variado e está sempre inovando com qualidade e bom
              gosto, acompanhando as tendências do mercado, proporcionando aos seus clientes e 
              parceiros a rentabilidade esperada e a certeza de bons negócios.
            </span>
          </h1>
        </div>
        <div className="w-[40%]">
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: "0" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14419.196956669206!2d-49.3862087!3d-25.3780441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce032fa004613%3A0xc909e5c4c42e08a1!2sDmarks%20-%20Loca%C3%A7%C3%A3o%20de%20M%C3%B3veis%20em%20Curitiba!5e0!3m2!1spt-BR!2sbr!4v1708469410159!5m2!1spt-BR!2sbr"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
