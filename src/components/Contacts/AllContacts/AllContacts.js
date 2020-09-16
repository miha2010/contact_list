import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Contact from "../Contact/Contact";
import plusIcon1 from "../../../Images/plusIcon.svg";

import styles from "./AllContacts.module.css";

const AllContacts = ({ searchTerm, contacts, setContacts }) => {
    let isFavorites = useLocation().pathname.includes('/favorites');
  
  let filteredContacts = contacts
    .filter((contact) => contact.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    .filter((contact) => !isFavorites || contact.isFavorite);

  return (
    <div className={styles.container}>
      <Link to="/add-new" className={styles.addNew}>
        <img src={plusIcon1} className={styles.addNewImage} />
        <p className={styles.addNewText}>Add new</p>
      </Link>
      {filteredContacts.map((contact) => (
        <Contact setContacts={setContacts} contacts={contacts} contact={contact} />
      ))}
    </div>
  );
};

export default AllContacts;
