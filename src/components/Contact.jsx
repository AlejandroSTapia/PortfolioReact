import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const INITIAL_FORM = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [buttonImage, setButtonImage] = useState(send);
  const [feedback, setFeedback] = useState({
    type: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (feedback.message) {
      setFeedback({
        type: '',
        message: '',
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setFeedback({
        type: 'error',
        message: 'Completa todos los campos antes de enviar.',
      });

      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        'Faltan las variables de entorno necesarias para EmailJS.'
      );

      setFeedback({
        type: 'error',
        message:
          'El formulario no está configurado correctamente. Inténtalo más tarde.',
      });

      return;
    }

    setLoading(true);
    setFeedback({
      type: '',
      message: '',
    });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          message,
        },
        {
          publicKey,
        }
      );

      setForm(INITIAL_FORM);

      setFeedback({
        type: 'success',
        message:
          'Mensaje enviado correctamente. Te responderé lo más pronto posible.',
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);

      setFeedback({
        type: 'error',
        message:
          'No fue posible enviar el mensaje. Inténtalo nuevamente.',
      });
    } finally {
      setLoading(false);
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
        <p className={styles.sectionSubText}>Hablemos</p>

        <h3 className={styles.sectionHeadTextLight}>
          Contacto.
        </h3>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
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
              maxLength={100}
              required
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
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
              maxLength={150}
              required
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
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
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          {feedback.message && (
            <p
              role="status"
              className={
                feedback.type === 'success'
                  ? 'text-green-400 font-medium'
                  : 'text-red-400 font-medium'
              }
            >
              {feedback.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className={`live-demo flex justify-center sm:gap-4
            gap-3 sm:text-[20px] text-[16px] text-timberWolf
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[160px] sm:h-[50px]
            w-[140px] h-[45px] rounded-[10px] bg-night
            hover:bg-battleGray hover:text-eerieBlack
            transition duration-[0.2s] ease-in-out
            ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            onMouseEnter={() => setButtonImage(sendHover)}
            onMouseLeave={() => setButtonImage(send)}
          >
            {loading ? 'Enviando...' : 'Enviar'}

            <img
              src={buttonImage}
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