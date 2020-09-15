import React, { useState } from "react";
import { Link } from "react-router-dom";

import DeleteDialog from "../../DeleteDialog/DeleteDialog";
import styles from "./Contact.module.css";
import deleteIcon from "../../../Images/delete.svg";
import editIcon from "../../../Images/edit.svg";
import fullHeart from "../../../Images/fullHeart.svg";
import emptyHeart from "../../../Images/emptyHeart.svg";

const Contact = ({
  setAllContacts,
  allContacts,
  contact: { name, img, isFavorite, id },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const deleteContact = () => {
    const newContacts = allContacts.filter((contact) => contact.id !== id);

    setAllContacts(newContacts);

    localStorage.setItem("contacts", JSON.stringify(newContacts));

    toggleModal();
  };

  const handleLike = () => {
    const contact = allContacts.find((contact) => contact.id === id);

    const newContacts = allContacts.map((contact) =>
      contact.id === id
        ? { ...contact, isFavorite: !contact.isFavorite }
        : contact
    );

    setAllContacts(newContacts);

    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconsRow}>
        {isModalOpen && (
          <DeleteDialog
            toggleModal={toggleModal}
            deleteContact={deleteContact}
          />
        )}
        <a onClick={handleLike}>
          <img
            src={isFavorite ? fullHeart : emptyHeart}
            className={styles.icon}
          />
        </a>
        <div className={styles.rightIcons}>
          <Link to="contact-edit">
            <img src={editIcon} className={styles.icon} />
          </Link>
          <a onClick={toggleModal} href="#openModal-about">
            <img src={deleteIcon} className={styles.icon} />
          </a>
        </div>
      </div>
      <Link className={styles.avatarContainer} to="contact-details">
        <img className={styles.img} src={img} alt="avatar" />
        <p className={styles.name}>{name}</p>
      </Link>
    </div>
  );
};

export default Contact;
