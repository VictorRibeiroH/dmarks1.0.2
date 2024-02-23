import React from 'react';

const Page = () => {

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
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
          <textarea id="message" name="message" className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
        </div>
      </form>
      <a href="https://wa.me/5541991625742?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+cota%C3%A7%C3%A3o+dos+produtos%3A+" target='_blank' className="block mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md transition duration-300 text-center">Contate-nos via WhatsApp</a>
      <a href="mailto:dmarks@dmarks.com.br" className="block mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 text-center">Contate-nos via Email</a>
    </div>
  )
}

export default Page;
