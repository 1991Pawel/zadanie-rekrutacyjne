import React, { useState } from 'react';
import 'styles/global.scss';
import List from 'components/List/List';
import Modal from 'components/Modal/Modal';
import AddForm from 'components/AddForm/AddForm';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <List setModalOpen={setModalOpen} />
      <Modal isModalOpen={isModalOpen} closeModal={setModalOpen}>
        <AddForm />
      </Modal>
    </div>
  );
};

export default App;
