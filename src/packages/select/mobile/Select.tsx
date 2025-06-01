import { Select as RDXSelect } from 'radix-ui';
import { RightIcon, CheckIcon } from '@wisdesign/lsicon';

import type { SelectProps } from '../select';

import styles from './Select.module.scss';

function Select({
  label = 'Select',
  data = [],
  placeholder = 'Please select...',
  name,
}: SelectProps) {
  return (
    <RDXSelect.Root name={name}>
      <RDXSelect.Trigger id={name} className={styles.trigger}>
        <RDXSelect.Value className={styles.value} placeholder={placeholder} />
        <RDXSelect.Icon className={styles.icon}>
          <RightIcon />
        </RDXSelect.Icon>
      </RDXSelect.Trigger>

      <RDXSelect.Portal>
        <RDXSelect.Content className={styles.popper}>
          <h2 className={styles.title}>{label}</h2>
          <RDXSelect.Viewport className={styles.content}>
            {data.map((option) => {
              return (
                <RDXSelect.Item
                  className={styles.item}
                  key={option.value}
                  value={option.value}
                >
                  <RDXSelect.ItemText>{option.label}</RDXSelect.ItemText>
                  <RDXSelect.ItemIndicator className={styles.indicator}>
                    <CheckIcon />
                  </RDXSelect.ItemIndicator>
                </RDXSelect.Item>
              );
            })}
          </RDXSelect.Viewport>
        </RDXSelect.Content>
      </RDXSelect.Portal>
    </RDXSelect.Root>
  );
}

Select.displayName = 'Select';

export default Select;
