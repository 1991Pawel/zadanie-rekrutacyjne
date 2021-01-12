import React from 'react';
import styles from 'components/SubListItem/SubListItem.module.scss';
import { ListItem as ListItemTypes } from 'types/types';

type SubListItem = {
  listItem: ListItemTypes;
  handleAddSubItem: (id: number) => void;
  removeItemFromSublist: (id: number) => void;
  removeItemFormList: (id: number) => void;
};
const SubListItem: React.FC<SubListItem> = ({
  listItem,
  handleAddSubItem,
  removeItemFromSublist,
  removeItemFormList
}) => {
  const { sublist, name, id } = listItem;
  return (
    <li className={styles.listItemExtended}>
      <span className={styles.listItemExtendedHead}>
        {name}
        <button
          onClick={() => removeItemFormList(id)}
          className={styles.subListItemBtn}
        >
          &#x02013;
        </button>
      </span>
      <ul className={styles.subList}>
        {sublist?.map(({ name, id }) => (
          <li key={id} className={styles.subListItem}>
            <span>{name}</span>
            <button
              onClick={() => removeItemFromSublist(id)}
              className={styles.subListItemBtn}
            >
              &#x02013;
            </button>
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
