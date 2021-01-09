import React from 'react';
import styles from 'components/List/List.module.scss';
import { useListContext } from 'context/ListContext';

const List = () => {
  const { listItems } = useListContext();
  return (
    <div className={styles.listWrapper}>
      <h2 className={styles.listTitle}>People</h2>
      <ul className={styles.list}>
        {listItems.map((listItem) =>
          listItem.sublist === null ? (
            <li key={listItem.id} className={styles.listItem}>
              {listItem.name}
            </li>
          ) : (
            <li key={listItem.id} className={styles.listItemExtended}>
              <span className={styles.listItemExtendedHead}>
                {listItem.name}
                <button className={styles.subListItemBtn}>&#x02013;</button>
              </span>
              <ul className={styles.subList}>
                {listItem.sublist.map((subListItem, index) => (
                  <li key={index} className={styles.subListItem}>
                    {subListItem}
                    <button className={styles.subListItemBtn}>&#x02013;</button>
                  </li>
                ))}
                <button className={styles.subListBtn}>&#x0002B;</button>
              </ul>
            </li>
          )
        )}
        <button className={styles.listBtn}>&#x0002B;</button>
      </ul>
    </div>
  );
};
export default List;
