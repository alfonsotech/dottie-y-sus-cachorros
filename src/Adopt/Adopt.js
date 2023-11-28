import React from "react";
import "./Adopt.css";

const Adopt = () => {
  return (
    <div>
      <p>
        Gracias por considerar la adopción sin costo de uno de nuestros
        cachorros. Si estás interesado en darle un hogar amoroso y responsable a
        uno de ellos, te invitamos a completar el formulario de adopción en
        línea. Una vez recibamos tu formulario, nos pondremos en contacto
        contigo lo antes posible para continuar con el proceso. Los cachorros
        estaran disponibles apartir de diciembre 15.{" "}
      </p>
      <div className="adoptionForm">
        <form
          action="https://formspree.io/f/mwkdjane"
          method="POST"
          className="adoption-form"
        >
          <input
            type="text"
            name="puppy_name"
            id="puppy_name"
            placeholder="Dottie o Nombre del cachorro"
            className="form-input"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Su nombre completo"
            className="form-input"
            required
          />

          <input
            type="text"
            name="cedula_number"
            id="cedula_number"
            placeholder="Cédula o pasaporte"
            className="form-input"
            pattern="\d{11}" // Assuming the cédula has 11 digits without hyphens.
            title="Un número de cédula válido tiene 11 dígitos."
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="WhatsApp o Teléfono"
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="form-input"
            required
          />

          <textarea
            name="references"
            placeholder="Referencia(s) (opcional)"
            className="form-textarea"
          ></textarea>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="agree_neuter"
              name="agree_neuter"
              required
            />
            <label htmlFor="agree_neuter">
              Me comprometo a esterilizar a la mascota en el 6to mes
            </label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="agree_neuter"
              name="agree_neuter"
              required
            />
            <label htmlFor="agree_neuter">
              Acepto una visita de seguimiento en el hogar.
            </label>
          </div>

          <div className="formButton">
            <button type="submit" className="form-button">
              Enviar Solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adopt;
