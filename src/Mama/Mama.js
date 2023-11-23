import React from "react";
import { Link } from "react-router-dom";
import "./Mama.css"; // Make sure the CSS file is in the same directory and named correctly

const Mama = () => {
  return (
    <div className="la-mama-container">
      <div className="fixed-position"></div>

      <h1>
        <img
          src="./images/logo-transparent.png"
          alt="Dottie"
          className="logo-image"
        />
        Soy Dottie
      </h1>

      <p>
        Hola, me llaman Dottie. Quiero compartir con vosotros mi viaje, un viaje
        que cambió mi vida para siempre. Era el 14 de octubre cuando, agotada y
        embarazada, me encontraba acurrucada en un rincón de un edificio. Aquel
        día, mi suerte cambió cuando fui descubierta durante un paseo por una
        persona amable que también tenía perros.
      </p>

      <figure className="centered-figure">
        <img
          src="./images/boliche.jpg"
          alt="A very pregnant Dottie"
          className="centered-figure-img"
        />
        <figcaption className="figure-caption">La mama boliche!</figcaption>
      </figure>

      <p>
        Me sentí un poco asustada al principio, pero la bondad en sus ojos me
        tranquilizó. Me aseguró con una correa y pronto regresó solo por mí,
        llevándome a un lugar seguro. Después de una visita al veterinario,
        donde me confirmaron sana, me llevó a su casa. Fue un alivio saber que
        ni yo ni mis futuros cachorros seríamos una amenaza para otros.
      </p>

      <figure className="centered-figure">
        <img
          className="centered-figure-img vertical"
          src="./images/labor.jpg"
          alt="En labor"
        />
        <figcaption className="figure-caption">En labor</figcaption>
      </figure>

      <p>
        Una semana más tarde, en la noche del 21 al 22 de octubre, empecé a
        sentir los primeros signos de que mis cachorros estaban en camino. Con
        cuidado y amor, di a luz a 8 hermosos cachorros en solo dos horas y
        media. Fue un momento mágico y, aunque instintivamente sabía qué hacer,
        me sentí reconfortada por la ayuda que me brindaron para mantener todo
        limpio y cómodo.
      </p>

      <figure className="centered-figure">
        <img
          className="centered-figure-img vertical"
          src="./images/week1.jpg"
          alt="puppies feeding on week1"
        />
        <figcaption className="figure-caption">
          Cachorros en la primera semana
        </figcaption>
      </figure>

      <p>
        Ahora, busco un hogar para siempre, tanto para mis cachorros como para
        mí. Si tienes espacio en tu corazón y en tu hogar para un perro cariñoso
        y agradecido como yo, por favor, considera adoptarnos. No solo estarás
        dándonos un hogar, sino también la promesa de un futuro lleno de amor y
        aventuras juntos. ¿Nos abrirías la puerta de tu hogar y de tu corazón?
      </p>

      <div className="button-container">
        <Link to="/adopt" className="button-link">
          <button className="button">ADOPTA A DOTTIE</button>
        </Link>

        <Link to="/gallery" className="button-link">
          <button className="button">CONOCE A SUS CACHORROS</button>
        </Link>
      </div>
    </div>
  );
};

export default Mama;
