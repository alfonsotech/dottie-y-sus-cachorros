import React from "react";
import "./Footer.css"; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Contáctanos</h3>
        <form
          action="https://formspree.io/f/mwkdjane"
          method="POST"
          className="footer-form"
        >
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            className="footer-input"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            className="footer-textarea"
          ></textarea>
          <button type="submit" className="footer-button">
            Enviar
          </button>
        </form>
        <p className="footer-contact">
          Correo electronico: adoptaciones@nym.hush.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
