import React from "react";

const About = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <div className="flex pb-10">
        <div className="w-[60%] pb-10">
          <h1 className="max-w-[600px] text-base text-lightText mb-2">
            <span className="text-primeColor font-semibold text-lg">
              <span className="text-black text-4xl">DMARKS LOCAÇÕES</span>
            </span>{" "}
            <span className="text-gray-500">
              <br />
              <br />
              Uma empresa com mais de X ANOS de existência, a DMarks Locações nasceu
              em X, sob o desafio de atender a exigente produção de eventos, a
              partir do Sul, para todo o Brasil.
              <br />
              <br />
              A DMarks busca aliar qualidade e variedade em móveis, acessórios
              e equipamentos para eventos, de qualquer tipo, em ambientes funcionais
              e decorativos. Com diversos modelos de estofados, mesas, cadeiras e
              banquetas, a empresa possui também acessórios e equipamentos de
              refrigeração e linha branca, que complementam a gama de produtos
              disponíveis para locação.
              <br />
              <br />
              Destacando-se pela agilidade no atendimento ao cliente, tanto na área
              comercial quanto na expedição de materiais, a DMarks prima por métodos
              flexíveis, adaptando-se à agenda dos eventos e garantindo a rapidez
              esperada pelo mercado.
            </span>
          </h1>
        </div>
        <div className="w-[40%]">
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            style={{ border: "0" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14419.196956669206!2d-49.3862087!3d-25.3780441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce032fa004613%3A0xc909e5c4c42e08a1!2sDmarks%20-%20Loca%C3%A7%C3%A3o%20de%20M%C3%B3veis%20em%20Curitiba!5e0!3m2!1spt-BR!2sbr!4v1708469410159!5m2!1spt-BR!2sbr"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
