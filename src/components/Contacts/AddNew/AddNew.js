import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "./AddNew.module.css";
import uploadImageIcon from "../../../Images/uploadImageIcon.svg";
import personIcon from "../../../Images/personIcon.svg";
import emailIcon from "../../../Images/emailIcon.svg";
import phoneIcon from "../../../Images/phoneIcon.svg";
import plusIconOval from "../../../Images/plusIconOval.svg";

const AddNew = ({ contacts, setContacts }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [numbers, setNumbers] = useState([ { number: '', type: '' }]);
    // dodati novi state za sliku

    let history = useHistory();

    const handleChangeInput = (event, i) => {
        const { name, value } = event.target;
        const values = [...numbers];

        values[i][name] = value;

        setNumbers(values);
      }

      const handleAddInput = () => {
        setNumbers([...numbers, { number: '', type: '' }]);
      }

      const handleRemoveInput = (i) => {
        const values = [...numbers];

        values.splice(i, 1);

        setNumbers(values);
      }


    const handleSubmit = (e) => {
        e.preventDefault();
     
        history.push("/home");
    }

  return (
    <div className={styles.container}>
        {/* dodati button ili nes za dodavanje slike */}
      <div className={styles.uploadImage}>
        <img src={uploadImageIcon} width="20" height="20" />
      </div>
      <div className={styles.contactDetails}>
        <Link to="/home" className={styles.back}>Back</Link>
        <div className={styles.divider} />
        <div>
          <div className={styles.heading}>
            <img src={personIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>full name</h5>
          </div>
          <input value={fullName} onChange={(e) => setFullName(e.target.value)}  type="text" placeholder="Full name" className={styles.input} />
        </div>
        <div className={styles.divider} />
        <div>
          <div className={styles.heading}>
            <img src={emailIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>email</h5>
          </div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className={styles.input} />
        </div>
        <div className={styles.divider} />
        <div>
          <div className={styles.heading}>
            <img src={phoneIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>numbers</h5>
          </div>
          {numbers.map((field, i) => (
              <div key={`${field}-${i}`}>
                    <input type="text" name="number" className={styles.input} value={field.number} placeholder="Number" onChange={(e) => handleChangeInput(e, i)} />
                    <input type="text" name="type" className={styles.smallInput} value={field.type} placeholder="Cell" onChange={(e) => handleChangeInput(e, i)} />
                    <button className={styles.circle} onClick={() => handleRemoveInput(i)}>X</button>
              </div>
          ))}
          <div className={styles.addNumberContainer}>
            <button className={styles.circle} onClick={handleAddInput}>
              <img src={plusIconOval} />
            </button>
            <h5 className={styles.addNumber}>ADD</h5>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/home" >
            <button className={styles.cancelButton}>Cancel</button>
          </Link>
          <button onClick={handleSubmit} className={styles.saveButton}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
