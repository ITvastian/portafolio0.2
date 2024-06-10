import ProjectCard from "./ProjectCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/App.css";
import CardProfile from "./CardProfile";
import Footer from "./Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
 
function App() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  // Projects
  const projects = [
    {
      title: "Example portfolio",
      description:
        "A continuación, les dejo un ejemplo de portafolio que, siendo sincero, ¡quedó mejor que mi propio portafolio! Debí usar ese diseño. A este, le agregué nuevamente algunos estilos y combinaciones de colores.",
      link: "https://github.com/ITvastian/ExamplePortafolio",
      ver: "https://chimerical-brigadeiros-2983e0.netlify.app/",
      image: "/proyecto 9.png",
      backImage: "/qr/p1.png",
    },
    {
      title: "Traductor Txt a Voz (viceversa)",
      description:
        "Este es un proyecto desarrollado con JavaScript nativo. En el mismo se utilizan iconos de FontAwesome. Con peticiones fetch, utilizo la API de MyMemory, la cual tiene un límite de 5000 caracteres diarios. En el demo aquí presente se pueden utilizar todas las funcionalidades. Este es un proyecto que había realizado para el local donde trabajaba, como prueba piloto para clientes con discapacidades.",
      link: "https://github.com/ITvastian/proyecto2",
      ver: "https://itvastian.github.io/proyecto2/",
      image: "/proyecto 2.png",
      backImage: "/qr/p2.png",
    },
    {
      title: "Login",
      description:
        "Sitio web con su sistema de inicio de sesión y registro completo. Además, agregué algunos estilos para obtener una interfaz gráfica más atractiva.",
      link: "https://github.com/ITvastian/login-register",
      ver: "https://merry-yeot-52f093.netlify.app/",
      image: "/proyecto 8.png",
      backImage: "/qr/p3.png",
    },
    {
      title: "Carrito de compras",
      description:
        "En esta ocasión, quise simular el comportamiento básico de un carrito de compras con el fin de demostrar que me es posible realizar este tipo de proyectos. Como diseñador freelance, ya tuve la oportunidad de desarrollar carritos más complejos. Aquí les dejo el demo y el código.",
      link: "https://github.com/ITvastian/Carrito.github.io",
      ver: "https://itvastian.github.io/Carrito.github.io/",
      image: "/proyecto 3.png",
      backImage: "/qr/p4.png",
    },
    {
      title: "Juego Dino Chrome",
      description:
        "En este apartado podrán ver una muestra de mis conocimientos en JavaScript. En CSS utilicé algunos efectos. Si bien la finalidad del proyecto no era hacerlo responsivo, creo que logra llegar a un 60% de responsividad. Más que nada, quería demostrar algunos conocimientos con JS.",
      link: "https://github.com/ITvastian/JuegoDino",
      ver: "https://juegodino.netlify.app/",
      image: "/proyecto 4.png",
      backImage: "/qr/p5.png",
    },
    {
      title: "CRUD Node Js",
      description:
        "En esta ocasión, realicé un CRUD con el lenguaje Node.js y como base de datos MySQL. Además, utilicé módulos/frameworks como Express, express-my-connection, Morgan, MySQL y ESLint. Como motor de plantillas, utilicé EJS para procesar mis HTML en el servidor antes de ser enviados al cliente. Dicho CRUD cuenta con estilos de Bootstrap 5.",
      link: "https://github.com/ITvastian/CRUDNodejsMysql",
      image: "/proyecto 6.png",
      backImage: "/qr/crud.png",
    },
    {
      title: "API Clima",
      description:
        "Aquí dejo una API que, a mi parecer, es muy atractiva y útil. Está realizada con React + Vite. Para este propósito, consumí tres APIs: la información climática proviene de Weather.com, los otros recursos muestran los países (restcountries.com) y sus ciudades (rapidapi.com). Además, para realizar las solicitudes HTTP, utilicé la librería de JavaScript Axios y Ajax. ",
      link: "https://github.com/ITvastian/APIWeather",
      image: "/proyecto 7.png",
      backImage: "/qr/api.png",
    },
    {
      title: "Parallax WebSite",
      description:
        "Aquí diseño un estilo parallax, el cual se desplaza sobre los ejes cardinales al realizar un scroll. Dicho maquetado no lleva realmente mucho código; sin embargo, me pareció interesante mostrarlo y que experimenten su uso como usuarios.",
      link: "https://github.com/ITvastian/ParallaxWebsite",
      ver: "https://wbparallax.netlify.app/",
      image: "/proyecto 10.png",
      backImage: "/qr/p8.png",
    },
    {
      title: "Generador QR",
      description:
        "Este es un generador de código QR. El fin de dicho proyecto era demostrar el uso de librerías como qrcode.js. También se utilizó la API de Google Fonts, que proporciona un servicio web para cargar fuentes de texto personalizadas en una página web. La API de Google Fonts es utilizada por muchos sitios web para mejorar su aspecto y usabilidad al ofrecer una amplia variedad de fuentes tipográficas personalizadas.",
      link: "https://github.com/ITvastian/generadorQR",
      ver: "https://creadorqr.netlify.app/",
      image: "/proyecto 5.png",
      backImage: "/qr/p9.png",
    },
    {
      title: "Canvas",
      description:
        "Esta es una muestra de mis habilidades con Canvas JS. Le añadí un estilo de fuente de Google Fonts. Este proyecto es meramente ilustrativo, pero atractivo, y creo que podría contribuir a un estilo de web más dinámico e interactivo con el usuario.",
      link: "https://github.com/ITvastian/Canvas-vanillaJS",
      ver: "https://js-canvas-js.netlify.app/",
      image: "/proyecto 11.png",
      backImage: "/qr/p10.png",
    },
    {
      title: "Login",
      description:
        "Aquí diseñé un cuadro de inicio de sesión con algunos estilos y animaciones. Si bien esta ventana de inicio de sesión es muy simple, me pareció que podría ser interesante en el sitio adecuado y tal vez se le podrían agregar otras opciones de inicio de sesión con el mismo estilo de animación.",
      link: "https://github.com/ITvastian/AnimatedLogin",
      ver: "https://login-animated.netlify.app/",
      image: "/proyecto 12.png",
      backImage: "/qr/p11.png",
    },
    {
      title: "Quiz",
      description:
        "Un buen quiz interactivo, con muchos estilos en CSS y el script en JS. Además, se le agregaron estilos de Bootstrap. Podrán encontrar otra vista del proyecto al presionar el botón.",
      link: "https://github.com/ITvastian/website-form/tree/main",
      ver: "https://astounding-cat-9bb56b.netlify.app/",
      image: "/proyecto 1.png",
      backImage: "/qr/p12.png",
    },
    {
      title: "Rick And Morty-Hooks",
      description:
        "Una de mis últimas creaciones implementa mucho conocimiento en React, utilizando la última versión hasta la fecha, 18.1.0. En este proyecto, quise utilizar algunos Hooks que hacen que el sitio sea más ágil y versátil en lo que respecta al posicionamiento SEO. Además, apliqué conocimientos en el área de eficiencia, mejorando el rendimiento de dicha web. Quise ir un paso más allá de las webs de Rick And Morty que tanto se ven por las redes, mejorando e implementando algunas instancias de interacción más amenas para su relación con la experiencia de usuario (UX).",
      link: "https://github.com/ITvastian/RickAndMorty-React-hooks",
      image: "/rick.PNG",
      backImage: "/qr/rick.png",
    },
  ];

  return (
    <div className="container">
   
      <CardProfile />
      <h1 className="mb-5 title-project" id="projects">
        Mis Proyectos
      </h1>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div
              className="col-md-4 container-horizontal"
              key={index}
              data-aos="fade-up"
            >
              <ProjectCard
                className="project-card"
                title={project.title}
                description={project.description}
                link={project.link}
                ver={project.ver ? project.ver : undefined}
                image={project.image}
                backImage={project.backImage}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
