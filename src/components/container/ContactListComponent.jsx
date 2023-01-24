import React, {useState} from "react";
import { Contact } from "../../models/contact_class";
import ContactComponent from "../pure/Contact";

const ContactListComponent = (props) => {
  const [connect, setConnect] = useState(true);

  const defaultContact = new Contact(
    "Stiven",
    "Amaya",
    "stivenasegura@gmail.com",
    connect
  );

  
  const changeState = () => {
    if(connect) {
        setConnect(false)
    } else {
        setConnect(true)
    }
  }

  return (
    <div>
        <h1>Contacto</h1>
        <hr/>
        <ContactComponent contact={defaultContact} />
        <button onClick={changeState}>Cambiar estado</button>
    </div>
  )
}

export default ContactListComponent;
