/* eslint-disable react/prop-types */
import React from 'react';
import styles from 'components/SubListItem/SubListItem.module.scss';

export type SubListItem = {
  name: string;
  sublist: null | string[] | undefined;
  handleAddSubItem: (id: number | string) => void;
  id: any;
};

const SubListItem: React.FC<SubListItem> = ({
  name,
  sublist,
  handleAddSubItem,
  id
}) => {
  return (
    <li className={styles.listItemExtended}>
      <span className={styles.listItemExtendedHead}>
        {name}
        <button className={styles.subListItemBtn}>&#x02013;</button>
      </span>
      <ul className={styles.subList}>
        {sublist?.map((subListItem, index) => (
          <li key={index} className={styles.subListItem}>
            <span>{subListItem}</span>
            <button className={styles.subListItemBtn}>&#x02013;</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleAddSubItem(id)}
        className={styles.subListBtn}
      >
        &#x0002B;
      </button>
    </li>
  );
};

export default SubListItem;
