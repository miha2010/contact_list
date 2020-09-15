import React, { useState } from "react";
import { Link } from "react-router-dom";

// import contacts from "./mockData";
import Contact from "../Contact/Contact";
import plusIcon1 from "../../../Images/plusIcon.svg";

import styles from "./AllContacts.module.css";

const AllContacts = () => {
  const [allContacts, setAllContacts] = useState(
    JSON.parse(localStorage.getItem("contacts"))
  );

  console.log(allContacts);

  return (
    <div className={styles.container}>
      <Link to="/add-new" className={styles.addNew}>
        <img src={plusIcon1} className={styles.addNewImage} />
        <p className={styles.addNewText}>Add new</p>
      </Link>
      {allContacts.map((contact) => (
        <Contact
          setAllContacts={setAllContacts}
          allContacts={allContacts}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default AllContacts;
