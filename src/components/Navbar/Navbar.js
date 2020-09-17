import React from 'react';

import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles.container}>
      <NavLink to="/home" className={styles.link} activeStyle={{ color: '#2da1ad' }}>All contacts</NavLink>
      <span className={styles.line3}>|</span>
      <NavLink to="/favorites" className={styles.link} activeStyle={{ color: '#2da1ad' }}>My favorites</NavLink>
    </div>
    <div className={styles.line2} />
  </div>
);

export default Navbar;
