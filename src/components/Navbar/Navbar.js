import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <a href="#">
          <h3 className={styles.allContacts}>All contacts</h3>
        </a>
        <span className={styles.line3}>|</span>
        <a href="#">
          <h3 className={styles.myFavorites}>My favorites</h3>
        </a>
      </div>
      <div className={styles.line2}></div>
    </div>
  );
};

export default Navbar;
