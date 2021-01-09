/* eslint-disable react/prop-types */
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import styles from 'components/Modal/Modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal: FunctionComponent<ModalProps> = ({
  children,
  isModalOpen,
  setModalOpen
}) => {
  const portalDiv = document.getElementById('modal-root');
  if (!portalDiv) {
    throw new Error("The element #portal wasn't found");
  }
  if (!isModalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button onClick={() => setModalOpen(false)} className={styles.modalBtn}>
          &#x02013;
        </button>
        {children}
      </div>
    </div>,
    portalDiv
  );
};
export default Modal;
