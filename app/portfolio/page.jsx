import React from "react";

// Componente para representar um único evento com imagens e nome
const EventItem = ({ name, imageUrls }) => {
  return (
    <div style={{ flex: "0 0 auto", margin: "10px", textAlign: "center" }}>
      <h2 className="text-2xl mt-5">{name}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`${name}-${index}`}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              marginRight: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  // Suponha que você tenha uma lista de eventos com seus nomes e URLs de imagens
  const events = [
    {
      name: "Evento 1",
      imageUrls: [
        "/eventos/evento1.jpeg",
        "/eventos/evento2.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
      ],
    },
    {
      name: "Evento 2",
      imageUrls: [
        "/eventos/evento1.jpeg",
        "/eventos/evento2.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
      ],
    },
    {
      name: "Evento 3",
      imageUrls: [
        "/eventos/evento1.jpeg",
        "/eventos/evento2.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
  
      ],
    },
    {
      name: "Evento 4",
      imageUrls: [
        "/eventos/evento1.jpeg",
        "/eventos/evento2.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
     
      ],
    },
    {
      name: "Evento 5",
      imageUrls: [
        "/eventos/evento1.jpeg",
        "/eventos/evento2.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
       
      ],
    },
    {
      name: "Evento 6",
      imageUrls: [
        "/eventos/evento1.jpeg",
        "/eventos/evento2.jpeg",
        "/eventos/evento3.jpeg",
        "/eventos/evento3.jpeg",
      ],
    },
    // Adicione mais eventos conforme necessário
  ];

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
        {/* Mapeia cada evento para renderizar um componente EventItem */}
        {events.map((event, index) => (
          <EventItem
            key={index}
            name={event.name}
            imageUrls={event.imageUrls}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
