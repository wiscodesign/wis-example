import { Children, cloneElement } from 'react';
import { matchElement } from 'wis/core';

import type { ActionsProps } from '../actions';

import styles from './Actions.module.scss';

function Actions({ size, children }: ActionsProps) {
  const {
    elements: { Button: buttons },
  } = matchElement(children, ['Button']);

  return (
    <div className={styles.actions}>
      {Children.map(buttons, (button) => {
        return cloneElement(button, { size });
      })}
    </div>
  );
}

Actions.displayName = 'Actions';

export default Actions;
