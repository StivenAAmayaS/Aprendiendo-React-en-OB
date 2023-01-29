import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact_class";

export const ContactForm = ({ add }) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const mobileRef = useRef(0);

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      emailRef.current.value,
      mobileRef.current.value,
      false
    );
    add(newContact);
  }

  return (
    <form onSubmit={addContact} className="card d-flex pt-4 pb-4">
      <div className="d-flex flex-column align-items-center gap-3">
        <div className="d-flex flex-column gap-2 w-50">
          <input
            type="text"
            className="form-control"
            id="inputName"
            ref={nameRef}
            placeholder="Nombre del contacto"
            required
            autoFocus
          />
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            ref={emailRef}
            placeholder="Correo electronico"
            required
          />
          <input
            type="number"
            className="form-control"
            id="inputMobile"
            ref={mobileRef}
            placeholder="Teléfono"
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-50">
          Agregar Contacto
        </button>
      </div>
    </form>
  );
};
