import { useState } from 'react';
import { Checkbox } from 'radix-ui';
import { CheckIcon } from '@wisdesign/lsicon';
import dayjs from 'dayjs';

import type { ListProps, Item } from '../list';

import styles from './List.module.scss';

function List({ items = [] }: ListProps) {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  function handleCheckedChange(item: Item, checked: boolean) {
    setCheckedMap({
      ...checkedMap,
      [item.key]: checked,
    })
  }

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        return (
          <div key={item.key} data-disabled={checkedMap[item.key]} className={styles.card}>
            <div className={styles.left}>
              <Checkbox.Root
                className={styles.checkbox}
                id={item.key}
                onCheckedChange={(checked: boolean) => handleCheckedChange(item, checked)}
              >
                <Checkbox.Indicator className={styles.indicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span className={styles.no}>{index + 1 > 10 ? index + 1 : `0${index + 1}`}</span>
              <span className={styles.title}>{item.title}</span>
              {item.description && (
                <span className={styles.description}>{item.description}</span>
              )}
            </div>
            <div className={styles.right}>
              <div className={styles.item}>
                <span className={styles.label}>Project</span>
                <span className={styles.value}>{item.project}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>Create</span>
                <span className={styles.value}>
                  {dayjs(item.createTime).format('DD/MM/YYYY HH:mm:ss')}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

List.displayName = "List";

export default List;
