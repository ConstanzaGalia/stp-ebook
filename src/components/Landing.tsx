import React from "react";

export default function LandingPage() {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-[#EFFFFD] to-[#00B3AC] text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded drop-shadow-[0_4px_8px_rgba(0,179,172,0.5)]" alt="hero" src="/originalSTP.png" />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-bold text-gray-900">Formamos Entrenadores con herramientas reales</h1>
            <p className="mb-6 leading-relaxed font-bold">Capacitación de excelencia + tecnología de entrenamiento. Conocé Entrenamiento STP Academy y convertite en el entrenador que siempre quisiste ser.</p>
            <div className="flex justify-center mb-10">
            <a href="#aboutUs" className="mt-8 cursor-pointer animate-bounce">
                        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27" cy="26" r="18" stroke="white" stroke-width="2" />
                            <path
                                d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                                fill="white" />
                        </svg>
                    </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id='aboutUs' className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Somos STP: Especialistas en Entrenamiento con Propósito</h2>
          <p className="text-lg leading-relaxed">
            Somos un equipo de profesores universitarios de educación física, dedicados 100% al entrenamiento. Creamos STP para ofrecer programas de calidad que respondan a necesidades reales.
            <br /><br />
            Nuestros programas: STP POLICE (preparación para fuerzas de seguridad) y STP HEALTH & PERFORMANCE (salud y rendimiento). Ahora, sumamos STP Academy para formar entrenadores y STP App para acompañar su trabajo diario.
          </p>
        </div>
      </section>

      {/* Por qué nace STP Academy */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Porque Ser Profesor No Es Lo Mismo Que Ser Entrenador</h2>
          <p className="text-lg leading-relaxed">
            Al terminar la universidad, notamos que no estábamos preparados para entrenar personas. La formación era escolar, no práctica. Por eso, creamos STP Academy: formación integral desde la teoría hasta el entrenamiento real.
          </p>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Formación + Tecnología = Un Nuevo Paradigma</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white shadow rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Cursos Presenciales y On Demand</h3>
              <p>Entrenamiento general, funcional y sistema STP, en formatos flexibles.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Sistema de Entrenamiento STP</h3>
              <p>Método probado, práctico y adaptado a cada entrenador.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">STP App</h3>
              <p>Software de planificación y gestión pensado 100% para entrenadores.</p>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
