"use client";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Infos from "./Infos";

// Dados dos eventos
const events = [
  {
    id: 1,
    images: ["/eventos/evento3.jpeg", "/eventos/evento2.jpeg"],
    name: "Nome do Evento 1",
  },
  {
    id: 2,
    images: ["/eventos/evento2.jpeg", "/eventos/evento3.jpeg"],
    name: "Nome do Evento 2",
  },
  {
    id: 3,
    images: ["/eventos/evento2.jpeg", "/eventos/evento3.jpeg"],
    name: "Nome do Evento 3",
  },
  {
    id: 4,
    images: ["/eventos/evento2.jpeg", "/eventos/evento3.jpeg"],
    name: "Nome do Evento 4",
  },

  // Adicione mais objetos de evento conforme necessário
];

const Popular = () => {
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a abertura do modal
  const [currentEvent, setCurrentEvent] = useState(null); // Estado para controlar o evento atual selecionado

  const openModal = (event) => {
    setCurrentEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentEvent(null);
    setModalOpen(false);
  };

  return (
    <section className="py-2 mb-10 mt-8">

      <div className="container mx-auto">
        <h2 className="text-center">PORTFOLIO</h2>
        <p className="text-center mb-4">Confira alguns dos nossos trabalhos</p>
        <div className="slider-container">
          {events.map((event) => (
            <div
              key={event.id}
              className="image-container"
              onClick={() => openModal(event)}
            >
              <img src={event.images[0]} alt={event.name} />
              <div className="image-overlay">
                <h3 className="event-name">{event.name}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Modal para exibir todas as imagens */}
        {modalOpen && currentEvent && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                Fechar
              </button>
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
              >
                {currentEvent.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={currentEvent.name} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .slider-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .image-container {
          position: relative;
          width: 200px; /* Definir largura da imagem */
          height: auto; /* Altura ajustada automaticamente para manter a proporção */
          margin-bottom: 20px; /* Adicionar margem entre as imagens */
        }
        .image-container img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 8px;
        }
        .image-container:hover .image-overlay {
          opacity: 1;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999; // Para garantir que o modal esteja sempre em cima
        }
        .modal-content {
          background-color: #fff;
          padding: 20px;
          width: 80%; /* Largura do modal ajustada */
          height: 80%; /* Altura do modal ajustada */
          max-width: 800px; /* Definir largura máxima do modal */
          max-height: 600px; /* Definir altura máxima do modal */
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          font-size: 16px;
          color: #333;
          padding: 5px 10px; /* Adicionar espaço interno ao botão */
          border-radius: 4px;
          transition: background-color 0.3s ease; /* Adicionar transição para o hover */
          z-index: 99999; // Para garantir que o botão de fechar esteja sempre em cima
        }
        .close-btn:hover {
          background-color: #1885ad; /* Mudar a cor de fundo no hover */
          color: #fff; /* Mudar a cor do texto no hover */
        }
        .event-name {
          font-size: 20px; // Ajuste o tamanho da fonte conforme necessário
        }
      `}</style>

      <div>
          <Infos />
      </div>
    </section>
  );
};

export default Popular;
