/* eslint-disable react/prop-types */
import React from 'react';
import styles from 'components/List/List.module.scss';
import { useListContext } from 'context/ListContext';
import ListItem from 'components/ListItem/ListItem';
import SubListItem from 'components/SubListItem/SubListItem';

const List = ({ setModalOpen }: any) => {
  const { listItems, addItemToList } = useListContext();

  const handleAddSubItem = (id: any) => {
    const item = listItems.filter((item) => item.id === id);
    setModalOpen(true);
    console.log(item[0].extended);
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
        <button onClick={() => setModalOpen(true)} className={styles.listBtn}>
          &#x0002B;
        </button>
      </ul>
    </div>
  );
};
export default List;
