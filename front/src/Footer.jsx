import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-content">
          <div class="contact-info">
            <h4 className="contacto-footer">Contacto</h4>
            <p>
              <a href="mailto:sebiquesada11@gmail.com">sebiquesada11@gmail.com</a>
            </p>
            <p>Celular: 11-3344-9577</p>
          </div>
          <div class="social-links">
            <h4>Redes Sociales</h4>
            <a
              href="https://www.linkedin.com/in/sebastian-itvastian/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ITvastian"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/sebastian.quesada.9693"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
          <div class="footer-nav">
            <h4>Navegación</h4>
            <a href="#inicio">Inicio</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </div>
          <div className="cv-download">
            <h4>Currículum</h4>
            <a href="/Sebastian CV.pdf" download>
              Descargar CV
            </a>
          </div>
        </div>
        <div class="footer-bottom">
          <h1 className="footer-h1">Este portafolio fue creado por ITVastian con React, Python y JavaScript</h1>
          <p>&copy; 2018 ITVastian. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
