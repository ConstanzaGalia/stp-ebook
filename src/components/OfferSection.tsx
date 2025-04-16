import React from "react";
import { motion } from "framer-motion";
import {
  VideoCameraIcon,
  CalendarIcon,
  BookOpenIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Cursos On-Demand",
    description:
      "Accedé a todos los cursos en el momento que lo desees y estudialos a tu ritmo. Sin horarios ni presión, organizá tu formación como mejor se adapte a vos.",
    icon: VideoCameraIcon,
    center: false,
  },
  {
    title: "Workshops o Cursos en Vivo",
    description:
      "Realizamos encuentros exclusivos para nuestros alumnos, donde profundizamos en temas clave del entrenamiento con una mirada práctica y actual.",
    icon: CalendarIcon,
    center: false,
  },
  {
    title: "Biblioteca Exclusiva",
    description:
      "Contamos con una biblioteca virtual donde encontrás material de estudio, guías, papers y recursos complementarios sobre entrenamiento, nutrición y psicología deportiva.",
    icon: BookOpenIcon,
    center: false,
  },
  {
    title: "Acompañamiento Real",
    description:
      "Durante tu formación vas a estar acompañado por docentes y entrenadores con experiencia real en el campo, que te van a guiar en cada etapa.",
    icon: UserGroupIcon,
    center: true,
  },
];

export default function OfferSection() {
  return (
    <section id="offer" className="text-primary body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-primary mb-4">
            ¿Qué ofrecemos en STP Academy? 🤝
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-primary">
            Formación especializada en entrenamiento, con herramientas reales, flexibilidad y una comunidad que te acompaña en cada paso.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-secondary inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4 justify-center">
          {features.map((feature, idx) => {
            return(<motion.div
              key={idx}
              className="p-4 md:w-1/2 lg:w-1/3 flex flex-col text-center items-center"
              initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true, amount: 0.2 }} 
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-secondary text-white mb-5">
                {React.createElement(feature.icon, { className: "w-10 h-10" })}
              </div>
              <div className="flex-grow">
                <h2 className="text-primary text-xl title-font font-semibold mb-2">
                  {feature.title}
                </h2>
                <p className="leading-relaxed text-base text-primary">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          )
          }
            )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "/dashboard"}
          is="transition"
          className="flex mx-auto mt-16 text-white bg-secondary border-0 py-2 px-8 focus:outline-none hover:bg-secondary/90 rounded text-lg"
        >
          Ir a Academy
        </motion.button>
      </div>
    </section>
  );
}
