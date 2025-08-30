import type { ReactNode } from "react";

import { Outlet } from "react-router";

import NavbarComponent from "@/components/navbar/navbar.component.tsx";

import styles from "./logged-in.module.css";

export default function LoggedInLayout(): ReactNode {
  return (
    <div className={styles["logged-in"]}>
      <Outlet />
      <NavbarComponent />
    </div>
  );
}
