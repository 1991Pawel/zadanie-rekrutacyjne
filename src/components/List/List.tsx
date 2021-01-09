import React from 'react';
import styles from 'components/List/List.module.scss';

const List = () => (
  <div className={styles.listWrapper}>
    <h2 className={styles.listTitle}>People</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>Age 40+</li>
      <li className={styles.listItemExtended}>
        <span className={styles.listItemExtendedHead}>
          Ethnicity
          <button className={styles.subListItemBtn}>&#x02013;</button>
        </span>

        <ul className={styles.subList}>
          <li className={styles.subListItem}>
            Black
            <button className={styles.subListItemBtn}>&#x02013;</button>
          </li>
          <li className={styles.subListItem}>
            Hispanic
            <button className={styles.subListItemBtn}>&#x02013;</button>
          </li>
          <button className={styles.subListBtn}>&#x0002B;</button>
        </ul>
      </li>
      <li className={styles.listItem}>Incomeyearly 45k USD+</li>
      <button className={styles.listBtn}>&#x0002B;</button>
    </ul>
  </div>
);
export default List;
