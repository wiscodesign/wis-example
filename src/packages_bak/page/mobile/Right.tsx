import { useImperativeHandle, useRef, type Ref, forwardRef } from "react";
import { Modal, type ModalRef } from "example/modal"

import type { RightProps, RightRef } from "../page"

const Right = forwardRef(function Right({ title, children }: RightProps, ref: Ref<RightRef>) {
  const modalRef = useRef<ModalRef>(null);

  useImperativeHandle(ref, () => {
    return {
      show() {
        modalRef.current?.open();
      },
      hide() {
        modalRef.current?.close();
      },
    }
  })

  return (
    <Modal ref={modalRef} title={title} cancel={false} confirm={false}>
      {children}
    </Modal>
  )
});

Right.displayName = "Right";

export default Right;
