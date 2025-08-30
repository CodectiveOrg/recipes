import type { ReactNode } from "react";

import { Outlet } from "react-router";

import styles from "./logged-in.module.css";

export default function LoggedInLayout(): ReactNode {
  return (
    <div className={styles["logged-in"]}>
      <Outlet />
      <nav className={styles.navbar}>Navbar</nav>
    </div>
  );
}
