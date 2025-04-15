import React from "react";
import OfferSection from "./OfferSection";
import MisionVisionSection from "./MisionVisionSection";

export default function LandingPage() {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-[#EFFFFD] to-[#00B3AC] text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded drop-shadow-[0_4px_8px_rgba(0,179,172,0.5)]" alt="hero" src="/originalSTP.png" />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-bold text-gray-900">Formamos Entrenadores con herramientas reales</h1>
            <p className="mb-6 leading-relaxed font-bold">Una academia online especializada 100% en entrenamiento. Formación completa, actualizada y a tu ritmo.</p>
            <div className="flex justify-center mb-10">
            <a href="#offer" className="mt-8 cursor-pointer animate-bounce">
                        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27" cy="26" r="18" stroke="white" strokeWidth="2" />
                            <path
                                d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                                fill="white" />
                        </svg>
                    </a>
            </div>
          </div>
        </div>
      </section>

      <MisionVisionSection />

      <OfferSection />

      {/* Visión y Misión */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nuestra Visión y Misión</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">Visión</h3>
              <ul className="list-disc list-inside text-lg">
                <li>Programa de formación más completo</li>
                <li>Software integral de gestión</li>
                <li>Entrenadores con vocación y criterio</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Misión</h3>
              <ul className="list-disc list-inside text-lg">
                <li>Compartir nuestra pasión por la actividad física</li>
                <li>Construir comunidad entre entrenadores</li>
                <li>Ofrecer herramientas concretas para el día a día</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-[#00B3AC] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Unite a STP Academy</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Estás a un paso de convertirte en el entrenador que siempre quisiste ser. Formación, comunidad y tecnología en un solo lugar.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
        <button></button>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
