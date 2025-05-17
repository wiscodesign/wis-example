import { type Ref, useImperativeHandle, useState, forwardRef } from "react";

import type { RightProps, RightRef } from "../page"

import styles from "./Right.module.scss";

const Right = forwardRef(function Right({ children }: RightProps, ref: Ref<RightRef>) {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      show() {
        setVisible(true);
      },
      hide() {
        setVisible(false);
      },
    }
  })

  if (!visible) {
    return null;
  }

  return <div className={styles.right}>{children}</div>
});

Right.displayName = "Right";

export default Right;
