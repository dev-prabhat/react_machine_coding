/* eslint-disable react/prop-types */
import styles from "./modal.module.css";

const Modal = ({ removeModal }) => {
  return (
    <div className={styles.modal__container} onClick={() => removeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p>Modal Content</p>
        <button className={styles.close__btn} onClick={() => removeModal()}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
