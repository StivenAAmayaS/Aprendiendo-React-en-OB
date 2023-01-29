import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact_class";

const ContactComponent = ({ contact, connected, remove }) => {
  const contactIsConnect = () => {
    if (contact.isConected) {
      return (
        <span
          onClick={() => connected(contact)}
          className="badge bg-success"
          style={{ cursor: "pointer" }}
        >
          Conectado
        </span>
      );
    } else {
      return (
        <span
          onClick={() => connected(contact)}
          className="badge bg-secondary"
          style={{ cursor: "pointer" }}
        >
          Desconectado
        </span>
      );
    }
  };

  return (
    <tr>
      <td>
        <span>{contact.name}</span>
      </td>
      <td>
        <span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </span>
      </td>
      <td>
        <span>{contact.mobile}</span>
      </td>
      <td>{contactIsConnect()}</td>
      <td>
        <i
          onClick={() => remove(contact)}
          className="bi-trash"
          style={{ color: "orange", fontSize: "20px", cursor: "pointer" }}
        ></i>
      </td>
    </tr>

    // <div>
    //   <span>
    //     <b>Nombre:</b> {contact.first_name}
    //   </span>
    //   <br />
    //   <span>
    //     <b>Apellido:</b> {contact.last_name}
    //   </span>
    //   <br />
    //   <span>
    //     <b>Email:</b> {contact.email}
    //   </span>
    //   <br />
    //   <span>
    //     <b>Estado:</b>{" "}
    //     {contact.isConected ? "Contacto en línea" : "Contacto No Disponible"}
    //   </span>
    //   <br />
    // </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
  connected: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ContactComponent;
