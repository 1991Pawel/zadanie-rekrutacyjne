export type SubListItem = {
  name: string;
  id: number;
};

export type ListItem = {
  name: string;
  sublist: null | Array<SubListItem>;
  id: number;
  extended?: boolean;
};
