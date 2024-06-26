"use client"

import React from "react"

const Slider = () => {
  const slides = [
    {
      title: "Missão",
      description:
        "Fornecer móveis e produtos de decoração modernos e de qualidade para o seu evento com preços competitivos.",
    },
    {
      title: "Visão",
      description:
        "Ser empresa de referência no fornecimento de móveis para eventos, reconhecida pela qualidade de seus produtos, agilidade na entrega e no atendimento.",
    },
    { title: "Valores", description: "Qualidade, agilidade e confiança." },
  ]

  return (
    <div
      className="flex-col md:flex-row gap-10"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "77px",
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{ flex: 1, textAlign: "center", padding: "0 20px" }}
        >
          <h1 style={{ fontSize: "2em", fontWeight: "bold", margin: "0" }}>
            {slide.title}
          </h1>
          <p style={{ fontSize: "1.3em", maxWidth: "600px", margin: "0 auto" }}>
            {slide.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Slider
