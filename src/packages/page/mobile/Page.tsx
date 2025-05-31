import { matchElement } from "wis/core"

import type { PageProps } from "../page";

import styles from "./Page.module.scss";

function Page({ title, children }: PageProps) {
  const { elements: { Actions: actions }, unmatched } = matchElement(children, [{ type: "Actions", maxCount: 1 }])

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        {title}
      </div>
      <div className={styles.content}>
        {unmatched}
      </div>
      <div className={styles.footer}>
        {actions}
      </div>
    </div>
  )
}

Page.displayName = "Page";

export default Page;
