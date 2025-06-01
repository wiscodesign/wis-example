import { Select as RDXSelect } from 'radix-ui';
import { DownIcon, CheckIcon } from '@wisdesign/lsicon';

import type { SelectProps } from '../select';

function Select({ data = [], placeholder }: SelectProps) {
  return (
    <RDXSelect.Root>
      <RDXSelect.Trigger>
        <RDXSelect.Value placeholder={placeholder} />
        <RDXSelect.Icon>
          <DownIcon />
        </RDXSelect.Icon>
      </RDXSelect.Trigger>

      <RDXSelect.Portal>
        <RDXSelect.Content>
          <RDXSelect.Viewport>
            {data.map((option) => {
              return (
                <RDXSelect.Item key={option.value} value={option.value}>
                  <RDXSelect.ItemText>{option.label}</RDXSelect.ItemText>
                  <RDXSelect.ItemIndicator>
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
