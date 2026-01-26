import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { alex, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        
        <div
  className={`absolute inset-0 sm:top-[250px] top-[150px] 
  lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
  max-w-7xl mx-auto flex flex-row items-start
  justify-between gap-3`}>

  {/* Decoración lateral (línea y punto) */}
  <div className="flex flex-col justify-center items-center mt-5 ml-3">
    <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
    <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
  </div>

  {/* --- AQUÍ ESTÁ EL CAMBIO IMPORTANTE --- */}
  {/* Agregamos z-10 para que esté encima de todo y limitamos el ancho */}
  <div className="relative z-10 flex-1 sm:max-w-[65%] md:max-w-[60%] lg:max-w-[50%]"> 
    <h1
      className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
      Hola, soy{' '}
      <span
        className="sm:text-battleGray sm:text-[90px] 
        text-eerieBlack text-[50px] font-mova
        font-extrabold uppercase">
        Alejandro
      </span>
    </h1>

    {/* Cambié <p> por <div> para evitar el error de renderizado */}
    <div className={`${styles.heroSubText} mt-4 text-eerieBlack`}>
      {/* Estilicé mejor el subtítulo */}
      <h2 className="text-[20px] sm:text-[28px] font-bold uppercase tracking-wider mb-2 text-jet">
        Ingeniero de <span className="text-battleGray">software</span>
      </h2>
      
      {/* El texto descriptivo ahora tiene su propio párrafo y espacio (leading) */}
      <p className="leading-relaxed text-[16px] sm:text-[18px] opacity-90">
        Desarrollo y diseño de soluciones de software personalizadas.
        <br className="hidden sm:block" />
        Especialista en aplicaciones web, integraciones API y optimización de procesos.
      </p>
    </div>
  </div>
  {/* -------------------------------------- */}

  {/* Div vacío para espaciado (puedes dejarlo o quitarlo si usas el max-w de arriba) */}
  <div className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"></div>

  <div></div>
</div>

        {/* <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div> */}

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[70vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[80vh] xl:h-[90vh]"
            src={alex}
            alt="shaquille"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
