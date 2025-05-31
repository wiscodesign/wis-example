import { useState, useRef } from 'react';
import { AddOneIcon } from '@wisdesign/lsicon';
import { Page } from 'example/page';
import { Actions } from 'example/actions';
import { Button } from 'example/button';
import { List, type Item } from 'example/list';
import { Modal, type ModalRef } from 'example/modal';
import { Form, FormItem, type FormRef } from 'example/form';
import { Input } from 'example/input';

let count = 0;
function createKey() {
  return `TODO_${Date.now()}_${count++}`;
}

interface Create {
  name?: string;
  description?: string;
  project: string;
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
  const formRef = useRef<FormRef>(null);

  function handleCreate(data: Create) {
    console.log(data)
  }

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

      <Modal ref={modalRef} title="Create" width={600} height={424}>
        <Actions>
          <Button
            text="Cancel"
            onClick={() => {
              modalRef.current?.hide();
            }}
          />
          <Button
            text="Confirm"
            variant="primary"
            onClick={() => {
              formRef.current?.submit();
            }}
          />
        </Actions>

        <Form<Create> ref={formRef} onSubmit={handleCreate}>
          <FormItem label="Title" name="title">
            <Input placeholder="Please input..." />
          </FormItem>
          <FormItem label="Description" name="description">
            <Input placeholder="Please input..." />
          </FormItem>
          <FormItem label="Project" name="project">
            xxx
          </FormItem>
        </Form>
      </Modal>
    </Page>
  );
}
