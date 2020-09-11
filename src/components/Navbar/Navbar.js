import React from "react";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/">
          <h3 className={styles.allContacts}>All contacts</h3>
        </Link>
        <span className={styles.line3}>|</span>
        <Link to="/favorites">
          <h3 className={styles.myFavorites}>My favorites</h3>
        </Link>
      </div>
      <div className={styles.line2}></div>
    </div>
  );
};

export default Navbar;
