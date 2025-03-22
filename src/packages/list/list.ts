
export interface Item {
  key: string;
  title: string;
  description: string;
}
export interface ListProps {
  data: Item[];

  onSelect: (item: Item) => void;
}
