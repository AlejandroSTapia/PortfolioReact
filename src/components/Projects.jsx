import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  id,
  slug,
  shortName,
  name,
  description,
  image,
  repo,
  demo,
  tags,
  note,
  index,
  active,
  handleClick,
}) => {
  const navigate = useNavigate();

  const openExternalUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handlePrimaryAction = (event) => {
    event.stopPropagation();

    if (slug) {
      navigate(`/proyectos/${slug}`);
      return;
    }

    if (demo) {
      openExternalUrl(demo);
    }
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px]
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight
        h-full w-full opacity-[0.5] rounded-[24px]"
      />

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase
            w-[200px] h-[30px] whitespace-nowrap
            sm:text-[27px] text-[18px] text-timberWolf
            tracking-[1px] absolute lg:bottom-[7rem]
            lg:rotate-[-90deg] lg:origin-[0,0]
            leading-none z-20"
          >
            {shortName || name}
          </h3>
        </div>
      ) : (
        <div
          className="absolute bottom-0 p-8 justify-start w-full
          flex-col bg-[rgba(122,122,122,0.65)]
          rounded-b-[24px] z-20"
        >
          {repo && (
            <div className="absolute top-0 right-0 m-3">
              <button
                type="button"
                aria-label={`Abrir repositorio de ${name}`}
                onClick={(event) => {
                  event.stopPropagation();
                  openExternalUrl(repo);
                }}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10
                rounded-full flex justify-center items-center
                cursor-pointer sm:opacity-[0.9] opacity-[0.8]"
              >
                <img
                  src={github}
                  alt=""
                  className="w-4/5 h-4/5 object-contain"
                />
              </button>
            </div>
          )}

          <h2
            className="font-bold sm:text-[30px] text-[23px]
            text-timberWolf uppercase font-beckman
            sm:mt-0 -mt-[1rem] max-w-[90%]"
          >
            {name}
          </h2>

          <p
            className="mt-2 text-silver sm:text-[14px]
            text-[12px] max-w-3xl sm:leading-[22px]
            leading-[18px] font-poppins tracking-[0.5px]"
          >
            {description}
          </p>

          {tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag.name}
                  className="px-3 py-1 rounded-full
                  bg-night/80 text-silver text-[10px]
                  sm:text-[11px] font-poppins"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          {note && (
            <p className="mt-3 text-timberWolf text-[11px] font-poppins">
              {note}
            </p>
          )}

          {(slug || demo) && (
            <button
              type="button"
              className="live-demo flex justify-center
    sm:text-[16px] text-[14px] text-timberWolf
    font-bold font-beckman items-center
    px-5 whitespace-nowrap gap-3
    sm:w-[150px] sm:h-[50px]
    w-[138px] h-[46px]
    rounded-[10px] glassmorphism
    sm:mt-[18px] mt-[14px]
    hover:bg-battleGray hover:text-eerieBlack
    transition duration-[0.2s] ease-in-out"
              onClick={handlePrimaryAction}
            >
              <span>{slug ? "VER CASO" : "VER DEMO"}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("project-1");

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>CASOS DE IMPLEMENTACIÓN</p>

        <h2 className={`${styles.sectionHeadTextLight}`}>
          Proyectos destacados.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px]
          max-w-3xl leading-[30px]"
        >
          Selección de soluciones en las que he diseñado agentes de IA,
          automatizaciones, integraciones, APIs y componentes backend. Cada caso
          presenta el problema abordado, mi participación técnica, la
          arquitectura utilizada y el resultado obtenido.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
