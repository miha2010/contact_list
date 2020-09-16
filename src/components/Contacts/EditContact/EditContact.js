import React from "react";
import { Link } from "react-router-dom";
import styles from "./EditContact.module.css";
import uploadImageIcon from "../../../Images/uploadImageIcon.svg";
import personIcon from "../../../Images/personIcon.svg";
import emailIcon from "../../../Images/emailIcon.svg";
import phoneIcon from "../../../Images/phoneIcon.svg";
import plusIconOval from "../../../Images/plusIconOval.svg";

const AddNew = () => {
  return (
    <div className={styles.container}>
      <div className={styles.uploadImage}>
        <img src={uploadImageIcon} width="20" height="20" />
      </div>
      <div className={styles.contactDetails}>
        <Link to="/home" className={styles.back}>
          Back
        </Link>
        <div className={styles.divider} />
        <div>
          <div className={styles.heading}>
            <img src={personIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>full name</h5>
          </div>
          <input type="text" placeholder="Full name" className={styles.input} />
        </div>
        <div className={styles.divider} />
        <div>
          <div className={styles.heading}>
            <img src={emailIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>email</h5>
          </div>
          <input type="text" placeholder="Email" className={styles.input} />
        </div>
        <div className={styles.divider} />
        <div>
          <div className={styles.heading}>
            <img src={phoneIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>numbers</h5>
          </div>
          <input type="text" placeholder="Number" className={styles.input} />
          <input type="text" placeholder="Cell" className={styles.smallInput} />
          <button className={styles.circle}>x</button>
          <div className={styles.addNumberContainer}>
            <button className={styles.circle}>
              <img src={plusIconOval} />
            </button>
            <h5 className={styles.addNumber}>Add number</h5>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/home">
            <button className={styles.cancelButton}>Cancel</button>
          </Link>
          <Link to="/home">
            <button className={styles.saveButton}>Save</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
