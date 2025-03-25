import { useRef, useState } from "react";
import { Page, Right } from "example/page";
import type { RightRef } from "example/page";
import { Actions } from "example/actions";
import { Button } from "example/button";
import { List } from "example/list";
import type { Item as ListItem } from "example/list"
import { Detail } from "example/detail";
import { Modal, type ModalRef } from "example/modal";
import { Form, Item } from "example/form";
import type { FormRef } from "example/form";

interface TodoData {
  key: string;
  title: string;
  description: string;
}

function Todo() {
  const right = useRef<RightRef>(null);
  const addModal = useRef<ModalRef>(null);
  const form = useRef<FormRef>(null);
  const [data, setData] = useState<TodoData[]>([
    {
      key: `UID_${Date.now()}`,
      title: "Learn Wis Cross Application",
      description:
        "Wis is the open-source design system of Wis Design, aimed at providing excellent user experience for B-end products. This system provides runnable code, design tools, and product design guidelines based on an essence-based design language.",
    },
  ]);
  const [selectItem, setSelectItem] = useState<ListItem>();

  function handleSelect(item: ListItem) {
    setSelectItem(item);
    right.current?.show();
  }

  function handleAdd() {
    addModal.current?.open();
  }

  function handleConfirm() {
    form.current?.submit();
  }

  function handleSubmit(value: Record<string, string>) {
    if (!value.title && !value.description) {
      return;
    }

    const nextData = data.slice();
    nextData.push({
      key: `UID_${Date.now()}`,
      title: value.title,
      description: value.description,
    })

    setData(nextData)

    addModal.current?.close();
  }

  return (
    <Page title="Todo Application">

      <Actions>
        <Button text="Create" variant="primary" onClick={handleAdd} />
      </Actions>

      <List data={data} onSelect={handleSelect} />

      <Right title={selectItem?.key || "View"} ref={right}>
        {selectItem && (
          <Detail
            title={selectItem.title}
            description={selectItem.description}
          />
        )}
      </Right>

      <Modal ref={addModal} title="Create" onConfirm={handleConfirm}>
        <Form ref={form} onSubmit={handleSubmit}>
          <Item label="Title" name="title" node="input" />
          <Item label="Description" name="description" node="textarea" />
        </Form>
      </Modal>
    </Page>
  );
}

export default Todo;
