import React from "react";

import styles from "./SearchBar.module.css";
import magnifier from "../../Images/magnifier.png";

const SearchBar = () => {
  // const [allContacts, setAllContacts] = useState(
  //   JSON.parse(localStorage.getItem("contacts"))
  // );

  return (
    <div className={styles.inputContainer}>
      <img className={styles.icon} src={magnifier} />
      <input className={styles.rectangle2} type="text" />
    </div>
  );
};

export default SearchBar;
