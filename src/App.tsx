import React, { useState } from 'react';
import 'styles/global.scss';
import List from 'components/List/List';
import Modal from 'components/Modal/Modal';
import AddForm from 'components/AddForm/AddForm';

const App: React.FC = () => {
  const [isModalOpen, setModalOpens] = useState(false);
  return (
    <div>
      <List />
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpens}>
        <AddForm />
      </Modal>
    </div>
  );
};

export default App;
