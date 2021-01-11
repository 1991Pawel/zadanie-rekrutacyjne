export type ListItem = {
  name: string;
  sublist?: null | string[] | undefined;
  id: number;
  extended?: boolean;
};
