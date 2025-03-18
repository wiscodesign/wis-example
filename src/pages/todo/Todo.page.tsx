import { useRef } from "react";
import { Page, Right } from "example/page";
import type { RightRef } from "example/page";

function Todo() {
  const right = useRef<RightRef>(null);

  return (
    <Page title="TODO">
      <button type="button" onClick={() => right.current?.show()}>Open</button>
      <Right ref={right}>xxx</Right>
    </Page>
  );
}

export default Todo;
