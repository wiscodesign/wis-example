import { matchElement } from "../../../utils/matchElement";
import type { PageProps } from "../page";

import styles from "./Page.module.scss";

function Page({ title, children }: PageProps) {
  const {
    unmatched,
    elements: { Actions: actions, Right: right },
  } = matchElement(children, ["Actions", "Right"]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        {actions}
      </div>
      <div className={styles.main}>
        <div className={styles.content}>{unmatched}</div>
        {right}
      </div>
    </div>
  );
}

Page.displayName = "Page";

export default Page;
