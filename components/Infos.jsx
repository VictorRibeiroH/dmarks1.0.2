"use client";
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    { title: 'Missão', description: 'Fornecer móveis e produtos de decoração modernos e de qualidade para o seu evento com preços competitivos.' },
    { title: 'Visão', description: 'Ser empresa de referência no fornecimento de móveis para eventos, reconhecida pela qualidade de seus produtos, agilidade na entrega e no atendimento.' },
    { title: 'Valores', description: 'Qualidade, agilidade e confiança.' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Troca de slide a cada 10 segundos

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div style={{ textAlign: 'center' }} className='mt-12'>
      <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>{slides[currentSlide].title}</h1>
      <p style={{ fontSize: '1.2em', maxWidth: '600px', margin: '9 auto' }}>{slides[currentSlide].description}</p>
      <button className='btn btn-accent' style={{ display: 'block', margin: '20px auto' }} onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Slider;
