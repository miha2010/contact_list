import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContactDteails.module.css";

import emailIcon from "../../../Images/emailIcon.svg";
import phoneIcon from "../../../Images/phoneIcon.svg";
import emptyHeart from "../../../Images/emptyHeart.svg";
import fullHeart from "../../../Images/fullHeart.svg";
import editIcon from "../../../Images/editIcon.svg";

const AddNew = () => {
  return (
    <div className={styles.container}>
      <div className={styles.uploadImage}>
        {/* <img src={uploadImageIcon} width="20" height="20" /> */}
      </div>
      <div className={styles.contactDetails}>
        <div className={styles.header}>
          <div style={{ display: "flex" }}>
            <Link to="/" className={styles.back}>
              Back
            </Link>
            <h4 className={styles.bigName}>Addie Hernandez</h4>
          </div>
          <div>
            <img src={emptyHeart} height="13" width="15" />
            <Link to="/contact-edit">
              <img src={editIcon} height="13" width="15" />
            </Link>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.naslov}>
          <div className={styles.heading}>
            <img src={emailIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>email</h5>
          </div>
          <p className={styles.email}>addiehernandes@gmail.com</p>
        </div>
        <div className={styles.naslov}>
          <div className={styles.heading}>
            <img src={phoneIcon} className={styles.headingImg} />
            <h5 className={styles.headingText}>numbers</h5>
          </div>
          <p>
            <span className={styles.place}>Home</span>{" "}
            <span className={styles.number}>+385 21 546 456</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
