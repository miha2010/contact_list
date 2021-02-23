import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ContactDteails.module.css';

import emailIcon from '../../../Images/emailIcon.svg';
import phoneIcon from '../../../Images/phoneIcon.svg';
import emptyHeart from '../../../Images/emptyHeart.svg';
import fullHeart from '../../../Images/fullHeart.svg';
import editIcon from '../../../Images/editIcon.svg';
import backIcon from '../../../Images/back.svg';

import ContactsContext from '../../../context/ContactsContext';

const ContactDetails = () => {
  const { contacts, likeContact, isMobile } = useContext(ContactsContext);
  const { id } = useParams();

  const currentContact = contacts.find((contact) => contact.id === id);

  return (
    <>
      {
        !isMobile
          ? (
            <>
              <div className={styles.container}>
                <div className={styles.circularImage}>
                  <img src={currentContact.image} className={styles.uploadImage} />
                </div>
                <div className={styles.contactDetails}>
                  <div className={styles.header}>
                    <div className={styles.headerAndButton}>
                      <Link to="/home" className={styles.back}>
                        <img className={styles.icon} src={backIcon} alt="back" height="20" width="20" />
                      </Link>
                      <h4 className={styles.bigName}>{currentContact.fullName}</h4>
                    </div>
                    <div className={styles.icons}>
                      <span onClick={() => likeContact(id)}>
                        <img src={currentContact.isFavorite ? fullHeart : emptyHeart} className={styles.icon} />
                      </span>
                      <Link to={`/contact-edit/${id}`}>
                        <img src={editIcon} className="editIcon" height="18" width="18" />
                      </Link>
                    </div>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.naslov}>
                    <div className={styles.heading}>
                      <img src={emailIcon} className={styles.headingImg} />
                      <h5 className={styles.headingText}>email</h5>
                      <a href={`mailto:${currentContact.email}`} className={styles.email}>{currentContact.email}</a>
                    </div>
                  </div>
                  <div className={styles.naslov}>
                    <div className={styles.headingNumbers}>
                      <img src={phoneIcon} className={styles.headingImg} />
                      <h5 className={styles.headingTextPhone}>numbers</h5>
                      <div className={styles.right}>
                        {
                            currentContact.numbers.map(({ type, number }) => (
                              <p className={styles.numberContainer}>
                                <span className={styles.place}>{type.toUpperCase()}</span>
                                <a href={`callto:${number}`} className={styles.number}>{number}</a>
                              </p>
                            ))
                      }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
          : (
            <>
              <div className={styles.container}>
                <div className={styles.header}>
                  <Link to="/home" className={styles.back}>
                    <img className={styles.icon} src={backIcon} alt="back" height="23" width="23" />
                  </Link>
                  <div className={styles.icons}>
                    <span onClick={() => likeContact(id)}>
                      <img src={currentContact.isFavorite ? fullHeart : emptyHeart} className={styles.icon} />
                    </span>
                    <Link to={`/contact-edit/${id}`}>
                      <img src={editIcon} className="editIcon" height="18" width="18" />
                    </Link>
                  </div>
                </div>
                <div className={styles.divider2} />
                <div className={styles.nameAndImage}>
                  <div className={styles.circularImage}>
                    <img src={currentContact.image} />
                  </div>
                  <h4 h4 className={styles.bigName}>{currentContact.fullName}</h4>
                </div>
                <div className={styles.contactDetails}>
                  <div className={styles.divider} />
                  <div className={styles.naslov}>
                    <div className={styles.heading}>
                      <div style={{ display: 'flex' }}>
                        <img src={emailIcon} className={styles.headingImg} />
                        <h5 className={styles.headingText}>email</h5>
                      </div>
                      <a href={`mailto:${currentContact.email}`} className={styles.email}>{currentContact.email}</a>
                    </div>
                  </div>
                  <div className={styles.naslov}>
                    <div className={styles.headingNumbers}>
                      <div style={{ display: 'flex' }}>
                        <img src={phoneIcon} className={styles.headingImg} />
                        <h5 className={styles.headingTextPhone}>numbers</h5>
                      </div>
                      <div className={styles.right}>
                        {
                  currentContact.numbers.map(({ type, number }) => (
                    <p className={styles.numberContainer}>
                      <span className={styles.place}>{type.toUpperCase()}</span>{' '}
                      <a href={`callto:${number}`} className={styles.number}>{number}</a>
                    </p>
                  ))
            }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
}
    </>
  );
};

export default ContactDetails;
