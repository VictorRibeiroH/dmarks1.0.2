"use client";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Componente para representar um único evento com imagens e nome
const EventItem = ({ name, imageUrl, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        flex: "0 0 auto",
        margin: "10px",
        textAlign: "center",
        cursor: "pointer",
        opacity: hovered ? 0.8 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "bold",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {name}
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventOpen, setIsEventOpen] = useState(false);

  const events = [
    {
      name: "Evento 1",
      imageUrls: [
        "/eventos/evento1.jpeg",
        "/eventos/evento2.jpeg",
        "/eventos/evento3.jpeg",
      ],
    },
    {
      name: "Evento 2",
      imageUrls: [
        "/eventos/evento1.jpeg",
        "/eventos/evento2.jpeg",
        "/eventos/evento3.jpeg",
      ],
    },
    {
      name: "Evento 3",
      imageUrls: [
        "/eventos/evento1.jpeg",
        "/eventos/evento2.jpeg",
        "/eventos/evento3.jpeg",
      ],
    },
    // Adicione mais eventos conforme necessário
  ];

  const handleEventClick = (index) => {
    if (selectedEvent === index && isEventOpen) {
      setSelectedEvent(null);
      setIsEventOpen(false);
    } else {
      setSelectedEvent(index);
      setIsEventOpen(true);
    }
  };

  return (
    <div>
      <h1 className="mt-4 text-4xl text-center">Portfólio</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {events.map((event, index) => (
          <EventItem
            key={index}
            name={event.name}
            imageUrl={event.imageUrls[0]}
            onClick={() => handleEventClick(index)}
          />
        ))}
      </div>
      {selectedEvent !== null && (
        <div>
          <h2 className="text-3xl mt-5">
            Slider de imagens para {events[selectedEvent].name}
          </h2>
          <Carousel>
            {events[selectedEvent].imageUrls.map((imageUrl, index) => (
              <div key={index}>
                <img
                  src={imageUrl}
                  alt={`${events[selectedEvent].name}-${index}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
