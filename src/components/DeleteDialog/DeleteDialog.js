import React from 'react';

import styles from './DeleteDialog.module.css';

const DeleteDialog = ({ toggleModal, deleteContact }) => (
  <div id="openModal-about" className={styles.modal}>
    <div className={styles.modalDiv}>
      <div className={styles.deleteContainer}>
        <p className={styles.delete}>Delete</p>
      </div>
      <div className={styles.divider} />
      <div className={styles.content}>
        <p className={styles.text}>Are you sure you want to delete this contact?</p>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={toggleModal} className={styles.cancelButton}>
            <span className={styles.buttonText}>Cancel</span>
          </button>
          <button type="button" onClick={deleteContact} className={styles.deleteButton}>
            <span className={styles.buttonText}>Delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default DeleteDialog;
