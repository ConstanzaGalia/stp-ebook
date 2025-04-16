import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6 md:px-20">
    <div className="flex flex-col md:flex-row justify-between">
      <div>
        <h3 className="font-bold text-lg mb-2">STP Academy</h3>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Cursos</a></li>
          <li><a href="#" className="hover:underline">Sobre nosotros</a></li>
          <li><a href="#" className="hover:underline">Contacto</a></li>
        </ul>
      </div>
      <div className="mt-6 md:mt-0">
        <h3 className="font-bold text-lg mb-2">Seguinos</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">Instagram</a>
          <a href="#" className="hover:text-blue-400">Facebook</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer