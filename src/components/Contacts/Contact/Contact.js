import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import deleteIcon from "../../../Images/delete.svg";
import editIcon from "../../../Images/edit.svg";
import fullHeart from "../../../Images/fullHeart.svg";
import emptyHeart from "../../../Images/emptyHeart.svg";

const Contact = ({ contact: { name, img, isFavorite } }) => {
  return (
    <Link to="contact-details" className={styles.container}>
      <div className={styles.iconsRow}>
        <img
          src={isFavorite ? fullHeart : emptyHeart}
          className={styles.icon}
        />
        <div className={styles.rightIcons}>
          <img src={editIcon} className={styles.icon} />
          <img src={deleteIcon} className={styles.icon} />
        </div>
      </div>
      <img className={styles.img} src={img} alt="avatar" />
      <p className={styles.name}>{name}</p>
    </Link>
  );
};

export default Contact;
