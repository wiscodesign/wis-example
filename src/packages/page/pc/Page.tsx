import { cloneElement } from 'react';
import { matchElement } from 'wis/core';

import type { PageProps } from '../page';

import styles from './Page.module.scss';

function Page({ title, children }: PageProps) {
  const {
    elements: { Actions: actions },
    unmatched,
  } = matchElement(children, [{ type: 'Actions', maxCount: 1 }]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          {actions ? cloneElement(actions[0], { size: 'md' }) : null}
        </div>
        <div className={styles.content}>{unmatched}</div>
      </div>
    </div>
  );
}

Page.displayName = "Page";

export default Page;
