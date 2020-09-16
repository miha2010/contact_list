import React, { useState } from "react";

import styles from "./SearchBar.module.css";
import magnifier from "../../Images/magnifier.png";

const SearchBar = ({ setSearchTerm, searchTerm, contacts, setContacts }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);

    contacts.filter((contact) =>
      contact.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  };

  return (
    <div className={styles.inputContainer}>
      <img className={styles.icon} src={magnifier} />
      <input
        className={styles.rectangle2}
        type="text"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
