import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (status) {
      setStatus(null);
    }
  };

  const validateForm = () => {
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      return 'Completa todos los campos.';
    }

    const validEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!validEmail) {
      return 'Ingresa un correo electrónico válido.';
    }

    if (name.length < 2) {
      return 'El nombre debe tener al menos 2 caracteres.';
    }

    if (message.length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres.';
    }

    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    const validationError = validateForm();

    if (validationError) {
      setStatus({
        type: 'error',
        message: validationError,
      });

      return;
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      console.error(
        'Faltan las variables de configuración de EmailJS.'
      );

      setStatus({
        type: 'error',
        message:
          'El formulario todavía no está configurado correctamente.',
      });

      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          message: form.message.trim(),
          page_url: window.location.href,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,

          // Evita varios envíos inmediatos desde la misma página.
          limitRate: {
            id: 'portfolio-contact-form',
            throttle: 10000,
          },
        }
      );

      setStatus({
        type: 'success',
        message:
          'Gracias. Tu mensaje fue enviado correctamente.',
      });

      setForm(initialForm);
} catch (error) {
  const errorStatus =
    error?.status ?? 'Sin estado';

  const errorText =
    error?.text ??
    error?.message ??
    'EmailJS no devolvió una descripción';

  console.error('Error al enviar con EmailJS');
  console.error('Status:', errorStatus);
  console.error('Detalle:', errorText);

  setStatus({
    type: 'error',
    message: `Error de EmailJS: ${errorText}`,
  });
}
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Hablemos
        </p>

        <h3 className={styles.sectionHeadTextLight}>
          Contacto.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
          noValidate
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Tu Nombre
            </span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cuál es tu nombre?"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
              disabled={loading}
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium
              disabled:opacity-60"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Tu Correo
            </span>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu correo electrónico?"
              autoComplete="email"
              maxLength={200}
              required
              disabled={loading}
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium
              disabled:opacity-60"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Tu Mensaje
            </span>

            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿En qué te puedo ayudar?"
              minLength={10}
              maxLength={2000}
              required
              disabled={loading}
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none
              disabled:opacity-60"
            />
          </label>

          {status && (
            <div
              role="status"
              aria-live="polite"
              className={
                status.type === 'success'
                  ? 'rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-3 text-green-300'
                  : 'rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-300'
              }
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="live-demo flex justify-center sm:gap-4
            gap-3 sm:text-[20px] text-[16px] text-timberWolf
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[160px] sm:h-[50px]
            w-[140px] h-[45px] rounded-[10px] bg-night
            hover:bg-battleGray hover:text-eerieBlack
            disabled:cursor-not-allowed disabled:opacity-60
            transition duration-[0.2s] ease-in-out"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            {loading ? 'Enviando...' : 'Enviar'}

            <img
              src={buttonHover ? sendHover : send}
              alt=""
              aria-hidden="true"
              className="contact-btn sm:w-[26px] sm:h-[26px]
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');