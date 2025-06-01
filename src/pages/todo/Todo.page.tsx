import { useState, useRef } from 'react';
import { AddOneIcon } from '@wisdesign/lsicon';
import { Page } from 'example/page';
import { Actions } from 'example/actions';
import { Button } from 'example/button';
import { List, type Item } from 'example/list';
import { Modal, type ModalRef } from 'example/modal';
import { Form, FormItem, type FormRef } from 'example/form';
import { Input } from 'example/input';
import { Select } from 'example/select';

let count = 0;
function createKey() {
  return `TODO_${Date.now()}_${count++}`;
}

interface Create {
  title?: string;
  description?: string;
  project: string;
}

interface Project {
  label: string;
  value: string;
}

export default function Index() {
  const [data, setData] = useState<Item[]>([
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
  const [projects] = useState<Project[]>([
    {
      label: '@wisdesign/wis',
      value: 'wis',
    },
    {
      label: '@wisdesign/cli',
      value: 'cli',
    },
  ]);
  const modalRef = useRef<ModalRef>(null);
  const formRef = useRef<FormRef>(null);

  function handleCreate(formData: Create) {
    const project = projects.find(item => item.value === formData.project);

    setData(
      data.concat([
        {
          key: createKey(),
          title: formData.title ?? 'None',
          description: formData.description ?? 'None',
          project: project?.label ?? 'None',
          createTime: Date.now(),
        },
      ]),
    );
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
              modalRef.current?.hide();
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
            <Select data={projects} />
          </FormItem>
        </Form>
      </Modal>
    </Page>
  );
}
