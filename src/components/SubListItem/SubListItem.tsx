/* eslint-disable react/prop-types */
import React from 'react';
import styles from 'components/SubListItem/SubListItem.module.scss';
import { ListItem as ListItemTypes } from 'types/types';

const SubListItem: React.FC<ListItemTypes> = ({ name, sublist }) => {
  return (
    <li className={styles.listItemExtended}>
      <span className={styles.listItemExtendedHead}>
        {name}
        <button className={styles.subListItemBtn}>&#x02013;</button>
      </span>
      <ul className={styles.subList}>
        {sublist?.map((subListItem, index) => (
          <li key={index} className={styles.subListItem}>
            {subListItem}
            <button className={styles.subListItemBtn}>&#x02013;</button>
          </li>
        ))}
        <button className={styles.subListBtn}>&#x0002B;</button>
      </ul>
    </li>
  );
};

export default SubListItem;
