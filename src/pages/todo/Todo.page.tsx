import { useRef, useState } from "react";
import { Page, Right } from "example/page";
import type { RightRef } from "example/page";
import { Actions } from "example/actions";
import { Button } from "example/button";
import { List, type Item } from "example/list";
import { Detail } from "example/detail";

function Todo() {
  const right = useRef<RightRef>(null);
  const [data, setData] = useState([
    {
      key: "todo1",
      title: "Learn Wis Cross Application",
      description:
        "Wis is the open-source design system of Wis Design, aimed at providing excellent user experience for B-end products. This system provides runnable code, design tools, and product design guidelines based on an essence-based design language.",
    },
  ]);
  const [selectItem, setSelectItem] = useState<Item>();

  function handleSelect(item: Item) {
    setSelectItem(item);
    right.current?.show();
  }

  function handleAdd() {
    setData(
      data.concat({
        key: `todo_${Date.now()}`,
        title: "Learn Wis Cross Application",
        description:
          "Wis is the open-source design system of Wis Design, aimed at providing excellent user experience for B-end products. This system provides runnable code, design tools, and product design guidelines based on an essence-based design language.",
      })
    );
  }

  return (
    <Page title="TODO">
      <Actions>
        <Button text="Add" onClick={handleAdd} />
      </Actions>
      <List data={data} onSelect={handleSelect} />
      <Right ref={right}>
        {selectItem && (
          <Detail
            title={selectItem.title}
            description={selectItem.description}
          />
        )}
      </Right>
    </Page>
  );
}

export default Todo;
