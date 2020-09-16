import React from "react";

import Contact from "../Contact/Contact";
import plusIcon from "../../../Images/plusIcon.png";
import plusIcon1 from "../../../Images/plusIcon.svg";

import styles from "./Favorites.module.css";

const Favorites = ({ contacts }) => {
  return (
    <div className={styles.container}>
      {contacts
        .filter((contact) => contact.isFavorite)
        .map((contact) => (
          <Contact contact={contact} />
        ))}
    </div>
  );
};

export default Favorites;
