/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';
const { v4: uuidv4 } = require('uuid');
import { data as initialState } from 'data/data';

export type SubListItem = {
  id: number;
  name: string;
};

export type ListItem = {
  name: string;
  sublist: null | Array<SubListItem>;
  id: number;
  extended?: boolean;
};

type ListConxtextProps = {
  listItems: ListItem[];
  addItemToList: (listItem: ListItem) => void;
  removeItemFromList: (id: number) => void;
  addItemToSublist: (item: SubListItem) => void;
  removeItemFromSublist: (id: number) => void;
};

export const ListContext = createContext<ListConxtextProps | undefined>(
  undefined
);

const ListProvider: React.FC = ({ children }) => {
  const [listItems, setListItems] = useState<ListItem[]>(initialState);

  const addItemToList = (listItem: ListItem) => {
    const newListItem = {
      ...listItem,
      id: uuidv4()
    };
    setListItems((prevState) => [...prevState, newListItem]);
  };

  const removeItemFromList = (id: number) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };

  const removeItemFromSublist = (id: number) => {
    const newList = listItems.map((item) => {
      if (item.sublist !== null) {
        console.log(item);
        const newSublist = item.sublist.filter((sublist) => sublist.id !== id);
        return {
          ...item,
          sublist: newSublist
        };
      }
      return item;
    });
    setListItems(newList);
  };

  const addItemToSublist = (subItem: SubListItem) => {
    const newItem = {
      name: subItem.name,
      id: uuidv4()
    };
    const newList = listItems.map((list) => {
      if (list.id === subItem.id) {
        const updatedItem = {
          ...list,
          sublist: list.sublist ? [...list.sublist, newItem] : [newItem]
        };
        return updatedItem;
      }
      return list;
    });
    setListItems(newList);
  };

  return (
    <ListContext.Provider
      value={{
        listItems,
        addItemToList,
        removeItemFromList,
        addItemToSublist,
        removeItemFromSublist
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = (): ListConxtextProps => {
  const ctx = useContext(ListContext);
  if (ctx === undefined) {
    throw new Error('useListContext must be used within a ListProvider');
  }
  return ctx;
};

export default ListProvider;
