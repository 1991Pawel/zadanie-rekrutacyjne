import React from 'react';
import styles from 'components/ListItem/ListItem.module.scss';
import { ListItem as ListItemTypes } from 'types/types';

const ListItem: React.FC<ListItemTypes> = ({ name }: ListItemTypes) => (
  <li className={styles.listItem}>
    {name}
    <button className={styles.listBtn}>&#x02013;</button>
  </li>
);

export default ListItem;
