"use client"

import React, { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Infos from "./Infos"

// Dados dos eventos
const events = [
  {
    id: 1,
    images: [
      "/eventos/expoapras/001.jpg",
      "/eventos/expoapras/002.jpg",
      "/eventos/expoapras/003.jpg",
      "/eventos/expoapras/004.jpg",
      "/eventos/expoapras/005.jpg",
      "/eventos/expoapras/006.jpg",
      "/eventos/expoapras/007.jpg",
      "/eventos/expoapras/008.jpg",
      "/eventos/expoapras/009.jpg",
      "/eventos/expoapras/010.jpg",
      "/eventos/expoapras/011.jpg",
      "/eventos/expoapras/012.jpg",
    ],
    name: "Evento ExpoApras 2024",
  },
  {
    id: 2,
    images: [
      "/eventos/smartcity/001.jpg",
      "/eventos/smartcity/002.jpg",
      "/eventos/smartcity/003.jpg",
      "/eventos/smartcity/004.jpg",
      "/eventos/smartcity/005.jpg",
      "/eventos/smartcity/006.jpg",
      "/eventos/smartcity/007.jpg",
      "/eventos/smartcity/008.jpg",
      "/eventos/smartcity/009.jpg",
      "/eventos/smartcity/010.jpg",
    ],
    name: "Smartcity 2024",
  },
  {
    id: 3,
    images: [
      "/eventos/dermato/001.jpg",
      "/eventos/dermato/002.jpg",
      "/eventos/dermato/003.jpg",
      "/eventos/dermato/004.jpg",
      "/eventos/dermato/005.jpg",
      "/eventos/dermato/006.jpg",
      "/eventos/dermato/007.jpg",
      "/eventos/dermato/008.jpg",
      "/eventos/dermato/009.jpg",
      "/eventos/dermato/010.jpg",
    ],
    name: `34º Congresso Brasileiro de Cirurgia Dermatológica`,
  },

  // Adicione mais objetos de evento conforme necessário
]

const Popular = () => {
  const [modalOpen, setModalOpen] = useState(false) // Estado para controlar a abertura do modal
  const [currentEvent, setCurrentEvent] = useState(null) // Estado para controlar o evento atual selecionado

  const openModal = (event) => {
    setCurrentEvent(event)
    setModalOpen(true)
  }

  const closeModal = () => {
    setCurrentEvent(null)
    setModalOpen(false)
  }

  return (
    <section className="py-2 mb-12 mt-8">
      <div className="container mx-auto">
        <h2 className="text-center">PORTFOLIO</h2>
        <p className="text-center mb-4" style={{ fontSize: "1.4em" }}>
          Confira alguns dos nossos trabalhos
        </p>
        <div className="slider-container">
          {events.map((event) => (
            <div
              key={event.id}
              className="image-container w-[340px]"
              onClick={() => openModal(event)}
            >
              <img
                className="max-h-[250px] object-cover"
                src={event.images[0]}
                alt={event.name}
              />
              <div className="image-overlay">
                <h3 className="event-name text-center max-w-[300px]">
                  {event.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* Modal para exibir todas as imagens */}
        {modalOpen && currentEvent && (
          <div className="modal" onClick={closeModal}>
            <div
              className="modal-content h-[50%] sm:h-[80%]"
              onClick={(e) => e.stopPropagation()}
            >
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
                    <img
                      src={image}
                      className="h-[410px] sm:max-h-[560px] object-cover"
                      alt={currentEvent.name}
                    />
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
  )
}

export default Popular
