import React, { useState, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import styles from './EditContact.module.css';
import personIcon from '../../../Images/personIcon.svg';
import emailIcon from '../../../Images/emailIcon.svg';
import phoneIcon from '../../../Images/phoneIcon.svg';
import plusIconOval from '../../../Images/plusIconOval.svg';
import ContactsContext from '../../../context/ContactsContext.js';

// edit ima delete gore desno...

const EditContact = () => {
  const { contacts, setContacts } = useContext(ContactsContext);
  const [contactDetails, setContactDetails] = useState({ fullName: '', email: '', numbers: [], image: '', id: uuidv4(), isFavorite: false });
  const history = useHistory();
  const { id } = useParams();

  const currentContact = contacts.find((contact) => contact.id === id); // DOBIJEMO KONTAKTA

  React.useEffect(() => {
    if (id) {
      setContactDetails(currentContact);
    }
  }, []);

  const handleChangeInput = (event, i) => {
    const { name, value } = event.target;
    const values = [...contactDetails.numbers];

    values[i][name] = value;

    setContactDetails({ ...contactDetails, numbers: values });
  };

  const handleAddInput = () => {
    setContactDetails({ ...contactDetails, numbers: [...contactDetails.numbers, { number: '', type: '' }] });
  };

  const handleRemoveInput = (i) => {
    const values = [...contactDetails.numbers];

    values.splice(i, 1);

    setContactDetails({ ...contactDetails, numbers: values });
  };

  const fileChangedHandler = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      setContactDetails({ ...contactDetails, image: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newContacts;

    if (id) {
      const prevContacts = contacts.filter((contact) => contact.id !== id);

      newContacts = [...prevContacts, contactDetails];
    } else {
      newContacts = [...contacts, contactDetails];
    }

    setContacts(newContacts);

    localStorage.setItem('contacts', JSON.stringify(newContacts));

    history.push('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.uploadImage}>
        <img src={contactDetails.image || 'https://bonds-and-shares.com/wp-content/uploads/2019/07/placeholder-user.png'} className={styles.image} />
      </div>
      <div className={styles.contactDetails}>
        <Link to="/home" className={styles.back}>Back</Link>
        <div className={styles.divider} />
        <input type="file" onChange={fileChangedHandler} />
        <div>
          <div className={styles.heading}>
            <img src={personIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>full name</h5>
          </div>
          <input value={contactDetails.fullName} onChange={(e) => setContactDetails({ ...contactDetails, fullName: e.target.value })} type="text" placeholder="Full name" className={styles.input} />
        </div>
        <div className={styles.divider} />
        <div>
          <div className={styles.heading}>
            <img src={emailIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>email</h5>
          </div>
          <input value={contactDetails.email} onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })} type="text" placeholder="Email" className={styles.input} />
        </div>
        <div className={styles.divider} />
        <div>
          <div className={styles.heading}>
            <img src={phoneIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>numbers</h5>
          </div>
          {contactDetails.numbers.map((field, i) => (
            <div key={`${field}-${i}`}>
              <input type="text" name="number" className={styles.input} value={field.number} placeholder="Number" onChange={(e) => handleChangeInput(e, i)} />
              <input type="text" name="type" className={styles.smallInput} value={field.type} placeholder="Cell" onChange={(e) => handleChangeInput(e, i)} />
              <button type="button" className={styles.circle} onClick={() => handleRemoveInput(i)}>X</button>
            </div>
          ))}
          <div className={styles.addNumberContainer}>
            <button type="button" className={styles.circle} onClick={handleAddInput}>
              <img src={plusIconOval} />
            </button>
            <h5 className={styles.addNumber}>ADD</h5>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/home">
            <button type="button" className={styles.cancelButton}>Cancel</button>
          </Link>
          <button type="button" onClick={handleSubmit} className={styles.saveButton}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
