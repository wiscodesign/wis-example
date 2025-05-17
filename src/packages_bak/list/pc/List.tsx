import type { ListProps } from "../list";

import styles from "./List.module.scss";

function List({ data = [], onSelect = () => {} }: ListProps) {
  return (
    <div className={styles.list}>
      {data.map((item) => {
        return (
          <button
            key={item.key}
            type="button"
            className={styles.item}
            onClick={() => onSelect(item)}
          >
            <div className={styles.title}>{item.title}</div>
            <div className={styles.content}>{item.description}</div>
          </button>
        );
      })}
    </div>
  );
}

export default List;
