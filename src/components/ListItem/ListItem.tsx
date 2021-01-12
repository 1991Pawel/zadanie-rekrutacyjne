/* eslint-disable react/prop-types */
import React from 'react';
import styles from 'components/ListItem/ListItem.module.scss';
import { ListItem as ListItemType } from 'types/types';

type ListItemProps = {
  removeItemFormList: (id: number) => void;
  listItem: ListItemType;
};

const ListItem: React.FC<ListItemProps> = ({
  listItem,
  removeItemFormList
}) => (
  <li className={styles.listItem}>
    <span>{listItem.name}</span>
    <button
      onClick={() => removeItemFormList(listItem.id)}
      className={styles.listBtn}
    >
      &#x02013;
    </button>
  </li>
);

export default ListItem;
