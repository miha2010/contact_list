import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BrowserView } from 'react-device-detect';
import styles from './ContactDteails.module.css';

import emailIcon from '../../../Images/emailIcon.svg';
import phoneIcon from '../../../Images/phoneIcon.svg';
import emptyHeart from '../../../Images/emptyHeart.svg';
import fullHeart from '../../../Images/fullHeart.svg';
import editIcon from '../../../Images/editIcon.svg';

import ContactsContext from '../../../context/ContactsContext';

const ContactDetails = () => {
  const { contacts, likeContact } = useContext(ContactsContext);
  const { id } = useParams();

  const currentContact = contacts.find((contact) => contact.id === id);

  return (
    <>
      <BrowserView viewClassName={styles.test}>
        <div className={styles.container}>
          <img src={currentContact.image} className={styles.uploadImage} />
          <div className={styles.contactDetails}>
            <div className={styles.header}>
              <div style={{ display: 'flex' }}>
                <Link to="/home" className={styles.back}>Back</Link>
                <h4 className={styles.bigName}>{currentContact.fullName}</h4>
              </div>
              <div>
                <span onClick={() => likeContact(id)}>
                  <img src={currentContact.isFavorite ? fullHeart : emptyHeart} className={styles.icon} />
                </span>
                <Link to="/contact-edit/">
                  <img src={editIcon} className="editIcon" height="18" width="18" />
                </Link>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.naslov}>
              <div className={styles.heading}>
                <img src={emailIcon} className={styles.headingImg} />
                <h5 className={styles.headingText}>email</h5>
                <p className={styles.email}>{currentContact.email}</p>
              </div>
            </div>
            <div className={styles.naslov}>
              <div className={styles.heading}>
                <img src={phoneIcon} className={styles.headingImgPhone} />
                <h5 className={styles.headingTextPhone}>numbers</h5>
                {
              currentContact.numbers.map(({ type, number }) => (
                <p>
                  <span className={styles.place}>{type.toUpperCase()}</span>{' '}
                  <span className={styles.number}>{number}</span>
                </p>
              ))
            }
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
      {/* <MobileView>
      <div className={styles.container}>
        <div className={styles.header}>
            <Link to="/home" className={styles.back}>
              Back
            </Link>
          <div className={styles.icons}>
            <img src={emptyHeart} height="18" width="18" />
            <Link to="/contact-edit">
              <img src={editIcon} className='editIcon' height="18" width="18" />
            </Link>
        </div>
          </div>
        <div className={styles.divider2}>
          <span className={styles.uploadImage}>
        <h4 h4 className={styles.bigName}>Addie Hernandez</h4>
      </span>
          </div>
      <div className={styles.contactDetails}>
        <div className={styles.divider} />
        <div className={styles.naslov}>
          <div className={styles.heading}>
            <img src={emailIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>email</h5>
            <p className={styles.email}>addiehernandes@gmail.com</p>
          </div>
        </div>
        <div className={styles.naslov}>
          <div className={styles.heading}>
            <img src={phoneIcon} className={styles.headingImgPhone} />
            <h5 className={styles.headingTextPhone}>numbers</h5>
            <p>
              <span className={styles.place}>HOME</span>{" "}
              <span className={styles.number}>+385 21 546 456</span>
            </p>
          </div>
        </div>
      </div>
      </div>
      </MobileView> */}
    </>
  );
};

export default ContactDetails;
