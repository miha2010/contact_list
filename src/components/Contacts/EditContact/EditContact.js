import React, { useState, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DeleteDialog from '../../DeleteDialog/DeleteDialog';
import ContactsContext from '../../../context/ContactsContext';

import styles from './EditContact.module.css';
import personIcon from '../../../Images/personIcon.svg';
import emailIcon from '../../../Images/emailIcon.svg';
import phoneIcon from '../../../Images/phoneIcon.svg';
import plusIconOval from '../../../Images/plusIconOval.svg';
import deleteIcon from '../../../Images/delete.svg';
import backIcon from '../../../Images/back.svg';

const EditContact = () => {
  const { contacts, setContacts, deleteContact, isMobile } = useContext(ContactsContext);
  const [contactDetails, setContactDetails] = useState({ fullName: '', email: '', numbers: [{ number: '', type: '' }], image: '', id: uuidv4(), isFavorite: false });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const toggleModal = () => setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);

  const currentContact = contacts.find((contact) => contact.id === id);

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

  const handleDelete = () => {
    deleteContact(id, toggleModal);

    history.push('/home');
  };

  return (
    <div className={styles.container}>
      { isMobile && (
        <>
          <div className={styles.backButtonContainer}>
            <Link to="/home" className={styles.back}>
              <img src={backIcon} className="editIcon" height="23" width="23" />
            </Link>
            { id ? (
              <a onClick={toggleModal} href="#openModal-about">
                <img src={deleteIcon} className={styles.iconLast} />
              </a>
            ) : null}
          </div>
          <div className={styles.line2} />
        </>
      ) }
      {isModalOpen && <DeleteDialog toggleModal={toggleModal} deleteContact={handleDelete} />}
      <div className={styles.uploadImage}>
        <img src={contactDetails.image || 'https://bonds-and-shares.com/wp-content/uploads/2019/07/placeholder-user.png'} className={styles.image} />
        <input type="file" className={styles.fileInput} onChange={fileChangedHandler} />
      </div>
      <div className={styles.contactDetails}>
        { !isMobile
         && (
         <>
           <div className={styles.backButtonContainer}>
             <Link to="/home" className={styles.back}>
               <img src={backIcon} className="editIcon" height="23" width="23" />
             </Link>
             <a onClick={toggleModal} href="#openModal-about">
               <img src={deleteIcon} className={styles.iconLast} />
             </a>
           </div>
           <div className={styles.line2} />
         </>
         )}
        <div className={styles.divider} />
        <form onSubmit={handleSubmit} validate>
          <div>
            <div className={styles.heading}>
              <img src={personIcon} className={styles.headingImg} />
              <h5 className={styles.headingText}>full name</h5>
            </div>
            <input type="text" required value={contactDetails.fullName} onChange={(e) => setContactDetails({ ...contactDetails, fullName: e.target.value })} placeholder="Full name" className={styles.input} />
          </div>
          <div className={styles.divider} />
          <div>
            <div className={styles.heading}>
              <img src={emailIcon} className={styles.headingImg} />
              <h5 className={styles.headingText}>email</h5>
            </div>
            <input type="email" value={contactDetails.email} onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })} placeholder="Email" className={styles.input} />
          </div>
          <div className={styles.divider} />
          <div>
            <div className={styles.heading}>
              <img src={phoneIcon} className={styles.headingImg} />
              <h5 className={styles.headingText}>numbers</h5>
            </div>
            {contactDetails.numbers.map((field, i) => (
              <div className={styles.phoneInputs} key={`${field}-${i}`}>
                <input required type="tel" name="number" className={styles.inputNumber} value={field.number} placeholder="Number" onChange={(e) => handleChangeInput(e, i)} />
                <input required type="text" name="type" className={styles.smallInput} value={field.type} placeholder="Cell" onChange={(e) => handleChangeInput(e, i)} />
                <div className={styles.circleButton}>
                  <button type="button" className={styles.circle} onClick={() => handleRemoveInput(i)}>x</button>
                </div>
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
            <button type="submit" className={styles.saveButton}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
