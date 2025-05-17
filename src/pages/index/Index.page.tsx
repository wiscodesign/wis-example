import { useState, useRef } from 'react';
import { AddOneIcon } from '@wisdesign/lsicon';
import { Page } from 'example/page';
import { Actions } from 'example/actions';
import { Button } from 'example/button';
import { List, type Item } from 'example/list';
import { Modal, type ModalRef } from 'example/modal';

let count = 0;
function createKey() {
  return `TODO_${Date.now()}_${count++}`;
}

export default function Index() {
  const [data] = useState<Item[]>([
    {
      key: createKey(),
      title: 'Shell',
      description: 'Create the shell component.',
      project: 'Wis',
      createTime: Date.now(),
    },
    {
      key: createKey(),
      title: 'Table',
      description: 'Create the table component.',
      project: 'Wis',
      createTime: Date.now(),
    },
    {
      key: createKey(),
      title: 'Form',
      description: 'Create the form component.',
      project: 'Wis',
      createTime: Date.now(),
    },
  ]);
  const modalRef = useRef<ModalRef>(null);

  return (
    <Page title="Todo List">
      <Actions>
        <Button
          text="Create"
          variant="primary"
          icon={<AddOneIcon />}
          onClick={() => {
            modalRef.current?.show();
          }}
        />
      </Actions>
      <List items={data} />
      <Modal ref={modalRef} title="Create">
        xxx
        <Actions>
          <Button
            text="Cancel"
            onClick={() => {
              modalRef.current?.hide();
            }}
          />
          <Button text="Confirm" variant="primary" />
        </Actions>
      </Modal>
    </Page>
  );
}
