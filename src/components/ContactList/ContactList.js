import React from 'react';
import './ContactList.css'

const ContactList = ({ contacts, onRemoveContact}) => (
  <ul className="ContactList">
    {contacts.map(contact => (
      <li key={contact.id} className="ContactList-item">
        <p className="ContactList-text">{contact.name}: {contact.number}</p>
        <button
        type="button"
        className="ContactList-button"
        onClick={() => onRemoveContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;