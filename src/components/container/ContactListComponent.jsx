import React, { useState } from "react";
import { Contact } from "../../models/contact_class";
import ContactComponent from "../pure/Contact";
import { ContactForm } from "../pure/forms/ContactForm";

const ContactListComponent = () => {
  const defaultContact1 = new Contact(
    "usuario1",
    "user1@example.com",
    8922918111,
    true
  );
  const defaultContact2 = new Contact(
    "usuario2",
    "user2@example.com",
    8922918112,
    false
  );
  const defaultContact3 = new Contact(
    "usuario3",
    "user3@example.com",
    8922918113,
    true
  );

  const [contacts, setContacts] = useState([
    defaultContact1,
    defaultContact2,
    defaultContact3,
  ]);

  const connectedUser = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].isConected = !tempContacts[index].isConected;
    setContacts(tempContacts);
  };

  const deleteContact = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  };

  // eslint-disable-next-line
  const addContact = (contact) => {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div className="col-12">
      <div className="card mb-3">
        <div className="card-header p-3">
          <h2 className="mb-0">Contactos</h2>
        </div>
        <div className="card-body" style={{ height: "400px", overflowY:"auto"}} >
          <table>
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => {
                return (
                  <ContactComponent
                    key={index}
                    contact={contact}
                    connected={connectedUser}
                    remove={deleteContact}
                  ></ContactComponent>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ContactForm add={addContact}></ContactForm>
    </div>
  );
};

export default ContactListComponent;
