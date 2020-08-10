import React from "react";

import styles from "./Header.module.css";
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <div className={styles.rectangle}>
      <img className={styles.shape} src={logo} />
    </div>
  );
};

export default Header;
