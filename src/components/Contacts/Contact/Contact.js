import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './Contact.module.css';
import DeleteDialog from '../../DeleteDialog/DeleteDialog';
import deleteIcon from '../../../Images/delete.svg';
import editIcon from '../../../Images/edit.svg';
import fullHeart from '../../../Images/fullHeart.svg';
import emptyHeart from '../../../Images/emptyHeart.svg';
import ContactsContext from '../../../context/ContactsContext';

const Contact = ({ contact: { fullName, image, isFavorite, id } }) => {
  const { likeContact, deleteContact } = useContext(ContactsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);

  return (
    <div key={id} className={styles.container}>
      <div className={styles.iconsRow}>
        {isModalOpen && <DeleteDialog toggleModal={toggleModal} deleteContact={() => deleteContact(id, toggleModal)} />}
        <span onClick={() => likeContact(id)}>
          <img src={isFavorite ? fullHeart : emptyHeart} className={styles.icon} />
        </span>
        <div className={styles.rightIcons}>
          <Link to={`/contact-edit/${id}`}>
            <img src={editIcon} className={styles.icon} />
          </Link>
          <a onClick={toggleModal} href="#openModal-about">
            <img src={deleteIcon} className={styles.icon} />
          </a>
        </div>
      </div>
      <Link className={styles.avatarContainer} to={`/contact-details/${id}`}>
        <img className={styles.img} src={image} alt="avatar" />
        <p className={styles.name}>{fullName}</p>
      </Link>
    </div>
  );
};

export default Contact;
