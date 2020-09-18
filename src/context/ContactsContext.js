import React, { createContext, useState } from 'react';

import mockContacts from '../mockContacts';

const ContactsContext = createContext();

if (!localStorage.getItem('contacts')) {
  localStorage.setItem('contacts', JSON.stringify(mockContacts));
}

export const ContactsStore = ({ children }) => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')));

  const likeContact = (id) => {
    const newContacts = contacts.map((contact) => (contact.id === id ? { ...contact, isFavorite: !contact.isFavorite } : contact));

    setContacts(newContacts);

    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const deleteContact = (id, toggleModal) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(newContacts);

    localStorage.setItem('contacts', JSON.stringify(newContacts));

    toggleModal();
  };

  return (
    <ContactsContext.Provider value={{ contacts, setContacts, likeContact, deleteContact }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContext;
