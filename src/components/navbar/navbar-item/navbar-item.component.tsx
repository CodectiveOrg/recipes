import { type ReactNode } from "react";

import styles from "./navbar-item.module.css";

type Props = {
  icon: ReactNode;
  title: string;
};

export default function NavbarItemComponent({ icon, title }: Props): ReactNode {
  return (
    <li className={styles["navbar-item"]}>
      {icon}
      <span>{title}</span>
    </li>
  );
}
