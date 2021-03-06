import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Contact from '../Contact/Contact';
import styles from './AllContacts.module.css';
import plusIcon1 from '../../../Images/plusIcon.svg';
import ContactsContext from '../../../context/ContactsContext';

const AllContacts = ({ searchTerm }) => {
  const { contacts } = useContext(ContactsContext);
  const isFavorites = useLocation().pathname === '/favorites';

  const filteredContacts = contacts
    .filter((contact) => contact.fullName.toLowerCase().startsWith(searchTerm.toLowerCase()))
    .filter((contact) => !isFavorites || contact.isFavorite);

  return (
    <div className={styles.container}>
      <Link to="/add-new" className={styles.addNew}>
        <img src={plusIcon1} className={styles.addNewImage} />
        <p className={styles.addNewText}>Add new</p>
      </Link>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default AllContacts;
