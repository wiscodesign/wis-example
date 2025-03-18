import { useImperativeHandle, useState } from "react";

import type { RightProps } from "../page"

import styles from "./Right.module.scss";

function Right({ children, ref }: RightProps) {
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
}

Right.displayName = "Right";

export default Right;
