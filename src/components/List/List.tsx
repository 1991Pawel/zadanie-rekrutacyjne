import React from 'react';
import styles from 'components/List/List.module.scss';
import { useListContext } from 'context/ListContext';
import ListItem from 'components/ListItem/ListItem';
import SubListItem from 'components/SubListItem/SubListItem';

const List: React.FC = () => {
  const { listItems } = useListContext();
  return (
    <div className={styles.listWrapper}>
      <h2 className={styles.listTitle}>People</h2>
      <ul className={styles.list}>
        {listItems.map(({ id, name, sublist }) =>
          sublist === null ? (
            <ListItem key={id} id={id} name={name} />
          ) : (
            <SubListItem key={id} id={id} name={name} sublist={sublist} />
          )
        )}
        <button onClick={() => console.log('click')} className={styles.listBtn}>
          &#x0002B;
        </button>
      </ul>
    </div>
  );
};
export default List;
