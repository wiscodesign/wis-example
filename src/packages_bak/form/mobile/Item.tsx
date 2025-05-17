import type { ItemProps } from "../form";

import styles from "./Item.module.scss";

function Item({ label, name, node = "input", placeholder = "Please input..." }: ItemProps) {
  return <div className={styles.item}>
    <label className={styles.label} htmlFor={name}>{label}</label>
    {node === "input" && <input className={styles.input} type="text" id={name} name={name} placeholder={placeholder} />}
    {node === "textarea" && <textarea className={styles.textarea} id={name} name={name} placeholder={placeholder} />}
  </div>
}

Item.displayName = "Item"

export default Item;