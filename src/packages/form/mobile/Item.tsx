import { Children, cloneElement, isValidElement } from "react";

import type { ItemProps } from '../form';

import styles from "./Form.module.scss";

function Item({ label, name, children }: ItemProps) {
  return (
    <div className={styles.item}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.control}>
        {Children.map(children, (child) => {
          if (!isValidElement(child)) {
            return child;
          }

          // @ts-ignore
          return cloneElement(child, { label, name });
        })}
      </div>
    </div>
  );
}

Item.displayName = 'FormItem';

export default Item;
