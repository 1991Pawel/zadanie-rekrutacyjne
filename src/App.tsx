import React from 'react';
import 'styles/global.scss';
import List from 'components/List/List';
import Modal from 'components/Modal/Modal';
import { useModalContext } from 'context/ModalContext';

const App: React.FC = () => {
  const { isModalOpen, setModalOpen } = useModalContext();
  return (
    <>
      <List />
      <Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen}>
        <div>lorem</div>
      </Modal>
      <button onClick={() => setModalOpen(true)}>xxxx</button>
    </>
  );
};

export default App;
