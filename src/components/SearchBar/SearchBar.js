import React from 'react';

import styles from './SearchBar.module.css';
import magnifier from '../../Images/magnifier.png';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className={styles.inputContainer}>
    <img className={styles.icon} src={magnifier} />
    <input className={styles.rectangle2} type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
  </div>
);

export default SearchBar;
