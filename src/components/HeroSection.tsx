import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToAboutUs = () => {
    const section = document.getElementById('aboutUs');
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-[#EFFFFD] to-[#00B3AC] text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded drop-shadow-[0_4px_8px_rgba(0,179,172,0.5)]"
          alt="hero"
          src="/originalSTP.png"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-8 font-bold text-gray-900">
            Formamos Entrenadores con herramientas reales
          </h1>
          <p className="mb-6 leading-relaxed font-bold">
            Una academia online especializada 100% en entrenamiento. Formación completa, actualizada y a tu ritmo.
          </p>

          <div className="flex justify-center mb-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 cursor-pointer animate-bounce"
              onClick={scrollToAboutUs}
            >
              <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27" cy="26" r="18" stroke="white" strokeWidth="2" />
                <path
                  d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                  fill="white"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
