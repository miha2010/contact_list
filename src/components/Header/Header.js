import React from 'react';

import styles from './Header.module.css';
import logo from '../../Images/logo.png';

const Header = () => (
  <>
    <div className={styles.rectangle}>
      <img className={styles.shape} src={logo} />
      <div className={styles.rectangle2} />
    </div>
  </>
);

export default Header;
