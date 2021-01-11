/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';
import { ListItem } from 'types/types';
const { v4: uuidv4 } = require('uuid');

const initialState = [
  {
    id: 1,
    name: 'Age 40+',
    sublist: null,
    extended: false
  },
  {
    id: 2,
    name: 'Ethnicity',
    sublist: ['Black', 'Hispanic'],
    extended: true
  },
  {
    id: 3,
    name: 'Incomeyearly 45k USD+',
    sublist: null,
    extended: false
  }
];

type ListConxtextProps = {
  listItems: ListItem[];
  addItemToList: (listItem: ListItem) => void;
  removeItemFromList: (id: number) => void;
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
    console.log('add list to item');
    setListItems((prevState) => [...prevState, newListItem]);
  };
  const removeItemFromList = () => {
    console.log('add list to item');
  };

  return (
    <ListContext.Provider
      value={{
        listItems,
        addItemToList,
        removeItemFromList
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
