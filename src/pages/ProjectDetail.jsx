import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from "react-router-dom";

import { projects } from "../constants";

const ProjectDetail = () => {
  const { slug } = useParams();

  const [copiedActionId, setCopiedActionId] = useState(null);

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const project = projects.find((item) => item.slug === slug);

  const evidence = project?.evidence;
  const evidenceScreenshots = evidence?.screenshots ?? [];

const copyPhoneNumber = async (action) => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(
        action.phone
      );
    } else {
      const textArea =
        document.createElement("textarea");

      textArea.value = action.phone;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);
      textArea.select();

      document.execCommand("copy");
      textArea.remove();
    }

    setCopiedActionId(action.id);

    window.setTimeout(() => {
      setCopiedActionId(null);
    }, 2500);
  } catch (error) {
    console.error(
      "No fue posible copiar el número:",
      error
    );
  }
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
  const detectMobileDevice = () => {
    const userAgentMobile =
      navigator.userAgentData?.mobile === true;

    const touchDevice =
      window.matchMedia(
        "(pointer: coarse)"
      ).matches;

    const narrowScreen =
      window.matchMedia(
        "(max-width: 767px)"
      ).matches;

    setIsMobileDevice(
      userAgentMobile ||
      (touchDevice && narrowScreen)
    );
  };

  detectMobileDevice();

  window.addEventListener(
    "resize",
    detectMobileDevice
  );

  return () => {
    window.removeEventListener(
      "resize",
      detectMobileDevice
    );
  };
}, []);

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

        {project.demoSection?.actions?.length > 0 && (
  <section className="mt-20">
    <p className="uppercase tracking-[2px] text-taupe text-[12px]">
      {project.demoSection.eyebrow || "Demostración"}
    </p>

    <h2 className="mt-2 font-beckman text-[28px] uppercase">
      {project.demoSection.title || "Probar proyecto"}
    </h2>

    {project.demoSection.description && (
      <p className="mt-5 max-w-3xl text-silver leading-[28px]">
        {project.demoSection.description}
      </p>
    )}

    <div className="mt-8 flex flex-wrap gap-4">
{project.demoSection.actions.map((action) => {
  const isAdaptivePhone =
    action.type === "adaptive-phone";

  const shouldOpenPhoneApp =
    isAdaptivePhone && isMobileDevice;

  const shouldCopyPhone =
    isAdaptivePhone && !isMobileDevice;

  const ActionElement =
    shouldCopyPhone ? "button" : "a";

  const actionProps = shouldCopyPhone
    ? {
        type: "button",
        onClick: () =>
          copyPhoneNumber(action),
      }
    : {
        href: action.href,
        target:
          action.external
            ? "_blank"
            : undefined,
        rel:
          action.external
            ? "noopener noreferrer"
            : undefined,
      };

  const actionLabel =
    shouldCopyPhone &&
    copiedActionId === action.id
      ? "Número copiado"
      : isAdaptivePhone
        ? (
            shouldOpenPhoneApp
              ? action.mobileLabel
              : action.desktopLabel
          )
        : action.label;

  return (
    <ActionElement
      key={action.id}
      {...actionProps}
      className="group flex items-center gap-4
      min-w-[280px] px-5 py-4
      rounded-[16px] bg-jetLight
      border border-taupe/20
      hover:border-taupe/60
      hover:bg-battleGray/20
      text-left cursor-pointer
      transition-colors"
      aria-label={actionLabel}
    >
      <span
        className={`w-11 h-11 shrink-0
        rounded-full flex items-center
        justify-center ${
          action.type === "whatsapp"
            ? "bg-[#25D366] text-white"
            : "bg-night text-timberWolf"
        }`}
      >
        {action.type === "whatsapp" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-6 h-6"
          >
            <path d="M12.04 2C6.52 2 2.03 6.47 2.03 11.98c0 1.76.46 3.48 1.34 4.99L2 22l5.17-1.35a10 10 0 0 0 4.86 1.24h.01c5.51 0 10-4.48 10-9.99A9.93 9.93 0 0 0 19.1 4.8 9.93 9.93 0 0 0 12.04 2Zm0 18.2h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.07.8.82-2.99-.2-.31a8.24 8.24 0 0 1-1.27-4.38c0-4.55 3.71-8.26 8.28-8.26a8.2 8.2 0 0 1 5.84 2.42 8.2 8.2 0 0 1 2.42 5.84c-.01 4.54-3.72 8.22-8.28 8.22Zm4.54-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.8.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24a7.5 7.5 0 0 1-1.38-1.72c-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.16 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
          </svg>
        )}

        {isAdaptivePhone && (
          shouldCopyPhone ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <rect
                x="8"
                y="8"
                width="11"
                height="11"
                rx="2"
              />

              <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
            </svg>
          )
        )}

        {action.type === "website" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="w-5 h-5"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
            />

            <path d="M3 12h18" />
            <path d="M12 3a15 15 0 0 1 0 18" />
            <path d="M12 3a15 15 0 0 0 0 18" />
          </svg>
        )}
      </span>

      <span className="flex-1">
        <span
          className="block font-beckman
          text-timberWolf text-[15px]
          uppercase"
        >
          {actionLabel}
        </span>

        {action.detail && (
          <span
            className="block mt-1
            text-taupe text-[13px]
            font-poppins"
          >
            {action.detail}
          </span>
        )}
      </span>

      {shouldCopyPhone ? (
        copiedActionId === action.id ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="w-5 h-5
            text-timberWolf"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
        ) : (
          <span
            className="text-taupe
            text-[12px] uppercase"
          >
            Copiar
          </span>
        )
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="w-5 h-5 text-taupe
          group-hover:text-timberWolf
          transition-colors"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      )}
    </ActionElement>
  );
})}
    </div>
    

    {project.demoSection.note && (
      <p className="mt-5 text-[12px] text-taupe leading-[20px]">
        {project.demoSection.note}
      </p>
    )}
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
