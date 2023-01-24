import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact_class'

const ContactComponent = ({contact}) => {
  return (
    <div>
        <span><b>Nombre:</b> {contact.first_name}</span><br />
        <span><b>Apellido:</b> {contact.last_name}</span><br />
        <span><b>Email:</b> {contact.email}</span><br />
        <span><b>Estado:</b> {contact.isConected ? 'Contacto en línea' : 'Contacto No Disponible' }</span><br />
    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}

export default ContactComponent
