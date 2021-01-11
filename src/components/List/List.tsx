/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from 'components/List/List.module.scss';
import { useListContext } from 'context/ListContext';
import ListItem from 'components/ListItem/ListItem';
import SubListItem from 'components/SubListItem/SubListItem';
import Modal from 'components/Modal/Modal';
import AddFormItem from 'components/AddFormItem/AddFormItem';
import AddFormSubitem from 'components/AddFormSubitem/AddFormSubitem';

const List = () => {
  const { listItems } = useListContext();
  const [openModal, setOpenModal] = useState(false);
  const [extendedFormId, setExtendedFormId] = useState<null | string>(null);

  const handleAddSubItem = (id: any) => {
    setOpenModal(true);
    setExtendedFormId(id);
  };

  const handleAddItem = () => {
    setExtendedFormId(null);
    setOpenModal(true);
  };

  return (
    <div className={styles.listWrapper}>
      <h2 className={styles.listTitle}>People</h2>
      <ul className={styles.list}>
        {listItems.map(({ id, name, sublist, extended }) =>
          !extended ? (
            <ListItem key={id} id={id} name={name} />
          ) : (
            <SubListItem
              handleAddSubItem={handleAddSubItem}
              key={id}
              id={id}
              name={name}
              sublist={sublist}
            />
          )
        )}
        <button onClick={handleAddItem} className={styles.listBtn}>
          &#x0002B;
        </button>
      </ul>
      <Modal isModalOpen={openModal} closeModal={setOpenModal}>
        {extendedFormId ? (
          <AddFormSubitem extendedFormId={extendedFormId} />
        ) : (
          <AddFormItem />
        )}
      </Modal>
    </div>
  );
};
export default List;
