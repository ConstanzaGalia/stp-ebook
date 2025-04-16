import { AcademicCapIcon, DevicePhoneMobileIcon, HomeIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6 md:px-20">
    <div className="flex flex-col md:flex-row justify-between">
      <div>        
        <h3 className="font-bold text-lg mb-3">STP Academy</h3>
        <ul className="space-y-3">
          <li className='flex items-center'><AcademicCapIcon height={20}/> <a href="/dashboard" className="hover:underline ml-2">Cursos</a></li>
          <li className='flex items-center'><HomeIcon height={20}/><a href="aboutUs" className="hover:underline ml-2">Sobre nosotros</a></li>
          <li className='flex items-center'><DevicePhoneMobileIcon height={20} /><a href="contact" className="hover:underline ml-2">Contacto</a></li>
        </ul>
      </div>
      <div className='flex md:flex-row justify-between'>
      <img className='w-[100px]' src="qrs.png" alt="Logo entrenamiento STP" />
      <img className='w-[150px]' src="BlancoSTP.png" alt="Logo entrenamiento STP" />
      <img className='w-[100px]' src="qrs.png" alt="Logo entrenamiento STP" />
      </div>
      <div className="mt-6 md:mt-0">
        <h3 className="font-bold text-lg mb-2">Seguinos</h3>
        <div className="flex space-x-2">
          <a href="https://www.instagram.com/entrenamientostp.tuc/"><img src='igIcono.png' alt='whatsapp' className='h-[40px] mt-1' /></a>
          <a href="https://www.facebook.com/EntrenamientoSTP.tuc?locale=es_LA"><img src='facebookIcon.png' alt='facebook' className='h-[50px]' /></a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer