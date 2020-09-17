import React from 'react';

import styles from './DeleteDialog.module.css';

const DeleteDialog = ({ toggleModal, deleteContact }) => (
  <div id="openModal-about" className={styles.modal}>
    <div>
      <div style={{ width: '100%' }}>
        <p className={styles.delete}>Delete</p>
        <div className={styles.divider} />
      </div>
      <p className={styles.text}>Are you sure you want to delete this contact?</p>
      <div>
        <button type="button" onClick={toggleModal} className={styles.cancelButton}>
          <span className={styles.buttonText}>Cancel</span>
        </button>
        <button type="button" onClick={deleteContact} className={styles.deleteButton}>
          <span className={styles.buttonText}>Delete</span>
        </button>
      </div>
    </div>
  </div>
);

export default DeleteDialog;
