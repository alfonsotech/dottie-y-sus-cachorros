import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="fixed-button">
        {/* The button is commented out, if you need it, just uncomment and adjust the styling */}
      </div>

      <h1>Dottie y sus cachorros</h1>

      <div className="home-section">
        <div className="image-container">
          <img
            src="./images/logo-transparent.png"
            alt="Dottie"
            className="home-image"
          />
        </div>
        <div className="text-container">
          <p>
            Hola, soy Dottie, una mamá orgullosa de 8 adorables cachorros. Mi
            vida dio un giro inesperado cuando fui encontrada exhausta y a punto
            de dar a luz. Afortunadamente, una persona amable me rescató y me
            llevó a un lugar seguro donde pude dar a luz con tranquilidad y
            amor.
          </p>
        </div>
      </div>

      <figure className="figure-center">
        <img
          className="figure-image horizontal"
          src="./images/birthing.jpg"
          alt="cleaning the pups"
        />
        <figcaption>Cachorros en la primera semana</figcaption>
      </figure>

      <p>
        Mis cachorros y yo estamos buscando hogares amorosos y permanentes. Cada
        uno de nosotros tiene una personalidad única y mucho amor para ofrecer.
        Si estás listo para abrir tu corazón y tu hogar, ¡considera adoptarnos!
        Juntos, podemos llenar tus días de alegría y amor incondicional.
      </p>

      <figure className="figure-center">
        <img
          className="figure-image horizontal"
          src="./images/pups1.jpg"
          alt="A very pregnant Dottie"
        />
        <figcaption>Los cachorros son jugetones!</figcaption>
      </figure>

      <p>
        Ahora, busco un hogar para siempre, tanto para mis cachorros como para
        mí. Si tienes espacio en tu corazón y en tu hogar para un perro cariñoso
        y agradecido como yo, por favor, considera adoptarnos. No solo estarás
        dándonos un hogar, sino también la promesa de un futuro lleno de amor y
        aventuras juntos. ¿Nos abrirías la puerta de tu hogar y de tu corazón?
      </p>

      <div className="button-container">
        <Link to="/mama" className="button-link">
          <button className="button">CONOCE A DOTTIE</button>
        </Link>

        <Link to="/gallery" className="button-link">
          <button className="button">CONOCE A LOS CACHORROS</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
