import React from "react";
import { Link } from "react-router-dom";

import contacts from "./mockData";
import Contact from "../Contact/Contact";
import plusIcon1 from "../../../Images/plusIcon.svg";

import styles from "./AllContacts.module.css";

const AllContacts = () => {
  return (
    <div className={styles.container}>
      <Link to="/add-new" className={styles.addNew}>
        <img src={plusIcon1} className={styles.addNewImage} />
        <p className={styles.addNewText}>Add new</p>
      </Link>
      {contacts.map((contact) => (
        <Contact contact={contact} />
      ))}
    </div>
  );
};

export default AllContacts;
