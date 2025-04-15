import React from 'react'

const MisionVisionSection = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">🧠 Sobre Entrenamiento STP 
        <br className="hidden lg:inline-block" /> Academy
      </h1>
      <p className="mb-4 leading-relaxed">En STP Academy creemos que el conocimiento, la experiencia y el acompañamiento real pueden transformar vidas a través del entrenamiento.</p>
    <p className="mb-4 leading-relaxed">Nuestro camino comenzó hace casi una década con un programa diseñado para fuerzas policiales. Con el tiempo, entendimos por qué tantas personas abandonan sus objetivos: falta de guía, metas irreales y entrenamientos sin conexión con su realidad. A partir de esa experiencia, creamos STP Health & Performance, un enfoque que pone a la persona en el centro, ya sea que entrene por salud, rendimiento o superación personal.</p>
    <p className="mb-4 leading-relaxed">
Hoy, damos un paso más con STP Academy, una plataforma educativa 100% online para entrenadores que buscan ir más allá. Ofrecemos formación especializada, actualizada y accesible, acompañada por profesionales con años de experiencia real en el campo.</p>
<p className="mb-4 leading-relaxed" >Nos mueve una misión: formar entrenadores capaces de inspirar, guiar y transformar. Porque el entrenamiento no es solo un plan, es una forma de vivir.</p>
    </div>
  </div>
</section>
  )
}

export default MisionVisionSection