import React, { useEffect, useState } from "react";
import "../src/styles/CardProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faLaptopCode,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import CardExpertice from "./CardExpertice";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const CardProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setModalContent({});
    window.location.href = "/";
  };

  const CardExperticeItems = [
    {
      title: "Desarrollo Web",
      icon: faCode,
      description:  [
        "Amplia experiencia en desarrollo web utilizando HTML, CSS y JavaScript para crear interfaces dinámicas y atractivas.",
        "Experto en frameworks modernos como React, Angular y Vue.js para el desarrollo de aplicaciones front-end escalables y eficientes.",
        "Familiaridad con herramientas de diseño y estilización como Tailwind CSS, Bootstrap y Sass para crear interfaces responsivas y estilizadas de manera eficiente.",
      ],
      years: 7,
    },
    {
      title: "Bases de Datos",
      icon: faDatabase,
      description: [
        "Amplia experiencia en bases de datos relacionales como MySQL y PostgreSQL, y no relacionales como MongoDB.",
        "Conocimiento en el diseño de esquemas de bases de datos, consultas complejas y optimización de rendimiento.",
        "Familiaridad con lenguajes de consulta como SQL y herramientas de administración de bases de datos.",
        "Integración de bases de datos con aplicaciones web modernas utilizando tecnologías como React, Angular y Vue.js.",
        "Diseño y desarrollo de sistemas de base de datos escalables y seguros para aplicaciones empresariales.",
      ],
      years: 5,
    },
    {
      title: "Programacion",
      icon: faLaptopCode,
      description: [
        "Amplia experiencia en desarrollo web utilizando HTML, CSS y JavaScript para crear interfaces interactivas y dinámicas.",
        "Dominio de frameworks modernos como React, Angular y Vue.js para el desarrollo de aplicaciones front-end.",
        "Capacidad para crear diseños web receptivos que se adapten a diferentes dispositivos y tamaños de pantalla.",
        "Conocimiento en herramientas y tecnologías de back-end como Express.js, GIT, Vtex IO y Webpack para el desarrollo y despliegue de aplicaciones.",
        "Experiencia en pruebas unitarias y de integración utilizando Jest, Jasmine y React Testing Library para garantizar la calidad del código.",
      ],
      years: 7,
    },
    {
      title: "Desarrollo Móvil",
      icon: faMobileAlt,
      description: [
        "Desarrollo para Android e iOS",
        "React Native, Flutter",
        "Diseño UI/UX móvil",
        "Integración de APIs",
        "Pruebas y depuración",
        "Publicación en Google Play",
      ],
      years: 5,
    },
  ];
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      bar.style.width = "100%";
    });
  }, []);
  return (
    <div className="container full-width-component">
      <h2 className="title-conocimiento" id="inicio">
        Portafolio Sebastián Quesada
      </h2>
      <div className="row expertice">
        <div className="col-md-6 left-side">
          <ul className="knowledge-list">
            {CardExperticeItems.map((item, index) => (
              <li
                key={index}
                className="conocimiento-years"
                onClick={() => handleOpenModal(item)}
              >
                <FontAwesomeIcon icon={item.icon} /> {item.title}
                <div className="progress-bar"></div>
                <p className="conocimiento-p">{item.years}años</p>
              </li>
            ))}
          </ul>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Knowledge Detail"
            ariaHideApp={false}
            className="Modal"
            overlayClassName="Overlay"
            shouldCloseOnOverlayClick={true} // Este evento cierra el modal al hacer clic en el overlay
          >
            <h2>Detalle del Conocimiento</h2>
            <CardExpertice
              title={modalContent.title}
              description={modalContent.description}
              years={modalContent.years}
            />
            <button onClick={handleCloseModal} className="btn-cerrar-modal">
              Cerrar
            </button>
          </Modal>
        </div>
        <div className="col-md-6 right-side">
          <div className="flip-card" id="contact">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="/profileSebastian.jpg"
                  alt="Mi Foto"
                  className="profile-photo"
                />
              </div>
              <div className="flip-card-back">
                <h1 className="card-h1">Sebastián Quesada</h1>
                <h4 className="card-h4">Sobre Mí</h4>
                <p className="card-p">
                  Soy un desarrollador apasionado por la tecnología y la
                  programación...
                </p>
                <div className="contact-info">
                  <div className="phone">
                    <FaPhoneAlt className="phone-icon" />
                    <span>1133449577</span>
                  </div>
                  <div className="email">
                    <FaEnvelope className="email-icon" />
                    <span>sebiquesada11@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
