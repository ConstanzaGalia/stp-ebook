import React from 'react';

const ContactSection = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row gap-10">
        
        {/* MAPA + BLOQUE DE INFO (UNO DEBAJO DEL OTRO) */}
        <div className="md:w-2/3 w-full flex flex-col gap-6">
          {/* Mapa visible en color */}
          <div className="rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.610100403749!2d-65.1945318!3d-26.820291599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225dc744e32c43%3A0x6c8b9d7b126dfcf4!2sEntrenamiento%20STP!5e1!3m2!1ses!2sar!4v1744762838222!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Entrenamiento STP"
            ></iframe>
          </div>

          {/* Info debajo del mapa */}
          <div className="bg-white p-6 rounded shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-4 sm:mb-0">
              <h2 className="title-font font-bold text-primary tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">Av. Sarmiento 30, San Miguel de Tucumán - Tucumán - Argentina</p>
            </div>
            <div>
              <h2 className="title-font font-bold text-primary tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:entrenamientostp@gmail.com"
                className="text-primary font-bold leading-relaxed"
              >
                entrenamientostp@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Contacto directo */}
        <div className="md:w-1/3 w-full bg-white flex flex-col md:py-8">
          <h2 className="text-gray-900 text-2xl mb-4 font-semibold title-font">
            ¿Querés hablar con nosotros?
          </h2>
          <p className="leading-relaxed mb-6 text-gray-600">
            Contactanos directo por WhatsApp o seguinos en Instagram. ¡Estamos para ayudarte!
          </p>

          <a
            href="https://wa.me/543815654293"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary py-3 px-5 rounded mb-4 text-lg transition-all"
          >
            <img src='wsspIcon.png' alt='whatsapp' className='h-[30px] mr-3' />
            Whatsapp
          </a>

          <a
            href="https://www.instagram.com/entrenamientostp.tuc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary py-3 px-5 rounded text-lg transition-all"
          >
            <img src='igIcono.png' alt='whatsapp' className='h-[40px] mr-2' />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

