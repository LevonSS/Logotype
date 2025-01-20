import styles from "./Popup.module.scss";
import PropTypes from "prop-types";

const Popup = ({ onClose, modalInfo }) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContainer__popup}>
        <h3 className={styles.popup__title}>{modalInfo.title}</h3>
        <p className={styles.popup__text}>{modalInfo.text}</p>
        <button onClick={onClose}>Close</button>
      </div>
      <div className={styles.popupContainer__overlay} onClick={onClose}></div>
    </div>
  );
};

Popup.propTypes = {
  onClose: PropTypes.func,
  modalInfo: PropTypes.object,
};

export default Popup;
