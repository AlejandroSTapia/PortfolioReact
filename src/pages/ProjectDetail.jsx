import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { projects } from "../constants";

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  const evidence = project?.evidence;
  const evidenceScreenshots = evidence?.screenshots ?? [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-eerieBlack text-timberWolf">
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
        <Link
          to="/"
          className="inline-flex text-taupe
          hover:text-white transition-colors"
        >
          ← Volver al portafolio
        </Link>

        <header className="mt-12">
          <p
            className="uppercase tracking-[3px]
            text-taupe text-[13px]"
          >
            Caso de implementación
          </p>

          <h1
            className="mt-4 font-beckman font-bold uppercase
            text-[36px] sm:text-[48px] lg:text-[62px]
            leading-[1.05]"
          >
            {project.name}
          </h1>

          <p
            className="mt-6 max-w-3xl text-silver
            text-[16px] sm:text-[18px] leading-[30px]"
          >
            {project.description}
          </p>

          {project.note && (
            <p className="mt-4 text-[13px] text-taupe">{project.note}</p>
          )}

          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-7">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-4 py-2 rounded-full
                  bg-jetLight text-silver text-[13px]"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </header>

        {project.image && (
          <img
            src={project.image}
            alt={`Vista principal de ${project.name}`}
            className="mt-12 w-full h-auto max-h-[620px]
    object-cover rounded-[24px] card-shadow"
          />
        )}

        {(project.challenge || project.solution) && (
          <section className="mt-20 grid md:grid-cols-2 gap-12">
            {project.challenge && (
              <article>
                <p className="uppercase tracking-[2px] text-taupe text-[12px]">
                  Contexto
                </p>

                <h2 className="mt-2 font-beckman text-[28px] uppercase">
                  El reto
                </h2>

                <p className="mt-5 text-silver leading-[28px]">
                  {project.challenge}
                </p>
              </article>
            )}

            {project.solution && (
              <article>
                <p className="uppercase tracking-[2px] text-taupe text-[12px]">
                  Implementación
                </p>

                <h2 className="mt-2 font-beckman text-[28px] uppercase">
                  La solución
                </h2>

                <p className="mt-5 text-silver leading-[28px]">
                  {project.solution}
                </p>
              </article>
            )}
          </section>
        )}

        {project.role && (
          <section className="mt-20">
            <p className="uppercase tracking-[2px] text-taupe text-[12px]">
              Responsabilidades
            </p>

            <h2 className="mt-2 font-beckman text-[28px] uppercase">
              Mi participación
            </h2>

            <p className="mt-5 max-w-4xl text-silver leading-[28px]">
              {project.role}
            </p>
          </section>
        )}

        {project.architecture && (
          <section className="mt-20">
            <p className="uppercase tracking-[2px] text-taupe text-[12px]">
              {project.architecture.eyebrow || "Arquitectura"}
            </p>

            <h2 className="mt-2 font-beckman text-[28px] uppercase">
              {project.architecture.title || "Arquitectura e implementación"}
            </h2>

            {project.architecture.description && (
              <p className="mt-5 max-w-4xl text-silver leading-[28px]">
                {project.architecture.description}
              </p>
            )}

            {project.architecture.image && (
              <img
                src={project.architecture.image}
                alt={
                  project.architecture.imageAlt ||
                  `Arquitectura de ${project.name}`
                }
                className="mt-8 w-full rounded-[20px] card-shadow"
              />
            )}

            {project.architecture.diagram && (
              <div
                className="mt-8 p-6 sm:p-8 rounded-[20px]
        bg-jetLight overflow-x-auto"
              >
                <pre
                  className="font-mono text-[12px]
          sm:text-[14px] text-silver leading-[26px]"
                >
                  {project.architecture.diagram}
                </pre>
              </div>
            )}
          </section>
        )}

        {project.result && (
          <section className="mt-20">
            <p className="uppercase tracking-[2px] text-taupe text-[12px]">
              Impacto
            </p>

            <h2 className="mt-2 font-beckman text-[28px] uppercase">
              Resultado
            </h2>

            <p className="mt-5 max-w-4xl text-silver leading-[28px]">
              {project.result}
            </p>
          </section>
        )}

        {evidenceScreenshots.length > 0 && (
          <section className="mt-20">
            <p className="uppercase tracking-[2px] text-taupe text-[12px]">
              {evidence?.eyebrow || "Demostración"}
            </p>

            <h2 className="mt-2 font-beckman text-[28px] uppercase">
              {evidence?.title || "Evidencia del proyecto"}
            </h2>

            {evidence?.description && (
              <p className="mt-5 max-w-3xl text-silver leading-[28px]">
                {evidence.description}
              </p>
            )}

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              {evidenceScreenshots.map((screenshot, index) => (
                <figure key={screenshot.id || `${screenshot.src}-${index}`}>
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full rounded-[18px] card-shadow"
                  />

                  {screenshot.caption && (
                    <figcaption className="mt-4 text-sm text-taupe leading-[22px]">
                      {screenshot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-24 pt-10 border-t border-taupe/20">
          <Link
            to="/"
            className="inline-flex text-taupe
            hover:text-white transition-colors"
          >
            ← Volver al portafolio
          </Link>
        </footer>
      </section>
    </main>
  );
};

export default ProjectDetail;
