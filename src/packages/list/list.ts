export interface Item {
  key: string;
  title: string;
  description?: string;
  project: string;
  createTime: number;
}

export interface ListProps {
  items?: Item[];
}
