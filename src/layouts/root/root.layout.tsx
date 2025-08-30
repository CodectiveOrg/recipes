import type { ReactNode } from "react";

import { Outlet } from "react-router";

import styles from "./root.module.css";

export default function RootLayout(): ReactNode {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  );
}
