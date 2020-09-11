import React from "react";

import contacts from "./mockData";
import Contact from "../Contact/Contact";
import plusIcon from "../../../Images/plusIcon.png";
import plusIcon1 from "../../../Images/plusIcon.svg";

import styles from "./AllContacts.module.css";

const AllContacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.addNew}>
        <img src={plusIcon1} className={styles.addNewImage} />
        <p className={styles.addNewText}>Add new</p>
      </div>
      {contacts.map((contact) => (
        <Contact contact={contact} />
      ))}
    </div>
  );
};

export default AllContacts;
