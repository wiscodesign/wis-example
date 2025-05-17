import type { DetailProps } from "../detail";

import styles from "./Detail.module.scss";

function Detail({ title, description }: DetailProps) {
  return (
    <div className={styles.detail}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{description}</div>
    </div>
  );
}

export default Detail;
