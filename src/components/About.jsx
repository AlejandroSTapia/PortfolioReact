import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// Definimos el texto aquí como un Array para tener control total de los párrafos.
// Esto es mucho más limpio que poner todo el bloque de texto dentro del return.
const overviewText = [
  "Soy Ingeniero de Software con una sólida trayectoria en desarrollo Backend (arquitectura de APIs con .NET, Python, Java) y Frontend moderno (React, TypeScript).",
  "Actualmente, he evolucionado mi perfil hacia la Ingeniería de IA y Automatización. Me especializo en integrar ecosistemas digitales complejos para empresas: desde Agentes de Voz y Chatbots, hasta la conexión avanzada de CRMs mediante Webhooks y flujos de trabajo automatizados.",
  "Trabajo mano a mano con mis clientes para entregar soluciones robustas que no solo funcionan, sino que optimizan radicalmente sus tiempos y recursos operativos."
];

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Servicios y soluciones.</h2>
      </motion.div>

      {/* Aquí está la magia:
         En lugar de un <motion.p> gigante, usamos un <div> que contiene
         varios <p> generados dinámicamente.
         Esto asegura que cada párrafo tenga su espacio correcto (mb-4).
      */}
      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        {overviewText.map((paragraph, index) => (
          <p key={index} className="mb-6"> {/* mb-6 da un buen espacio entre párrafos */}
            {paragraph}
          </p>
        ))}
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');