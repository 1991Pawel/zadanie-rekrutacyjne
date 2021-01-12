import React, { useState, useContext, createContext } from 'react';

type ModalConxtextProps = {
  isModalOpen: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalConxtextProps | undefined>(
  undefined
);

const ModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalConxtextProps => {
  const ctx = useContext(ModalContext);
  if (ctx === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return ctx;
};

export default ModalProvider;
