import React from 'react';
import styles from 'components/List/List.module.scss';

const List = () => (
  <div className={styles.listWrapper}>
    <h2 className={styles.listTitle}>People</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>Age 40+</li>
      <li className={styles.listItem}>
        Ethnicity
        <ul>
          <li>Black</li>
          <li>Hispanic</li>
          <button>+</button>
        </ul>
      </li>
      <li className={styles.listItem}>Incomeyearly 45k USD+</li>
    </ul>
  </div>
);
export default List;
