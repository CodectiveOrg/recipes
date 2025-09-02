import type { ReactNode } from "react";

import styles from "./selected-tabs.module.css";

export default function SelectedTabsComponent(): ReactNode {
  return <div className={styles["selected-tabs"]}></div>;
}
