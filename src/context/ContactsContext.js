import React, { createContext, useEffect, useState } from 'react';

import mockContacts from '../mockContacts';

const ContactsContext = createContext();

if (!localStorage.getItem('contacts')) {
  localStorage.setItem('contacts', JSON.stringify(mockContacts));
}

export const ContactsStore = ({ children }) => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')));
  const [width, setWidth] = useState(window.innerWidth);

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

  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <ContactsContext.Provider value={{ contacts, setContacts, likeContact, deleteContact, isMobile }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContext;
