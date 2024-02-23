"use client";

import React, { useState } from 'react';

const Page = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleWhatsAppClick = () => {
    // Aqui você pode adicionar lógica para enviar a mensagem via WhatsApp
    // Este exemplo apenas exibe a mensagem no console
    console.log('Mensagem via WhatsApp:', message);
  };

  const handleEmailClick = () => {
    // Aqui você pode adicionar lógica para enviar a mensagem via email
    // Este exemplo apenas exibe a mensagem no console
    console.log('Mensagem via Email:', message);
    // Você também pode redirecionar para um link de email com o assunto e corpo preenchidos
    // window.location.href = `mailto:dmarks@dmarks.com.br?subject=Assunto do Email&body=${encodeURIComponent(message)}`
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Entre em Contato</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">Nome:</label>
          <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold mb-1">Mensagem:</label>
          <textarea id="message" name="message" className="w-full border border-gray-300 rounded-md px-3 py-2" value={message} onChange={handleMessageChange}></textarea>
        </div>
      </form>
      <button onClick={handleWhatsAppClick} className="block mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md transition duration-300 text-center">Contate-nos via WhatsApp</button>
      <button onClick={handleEmailClick} className="block mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 text-center">Contate-nos via Email</button>
    </div>
  )
}

export default Page;