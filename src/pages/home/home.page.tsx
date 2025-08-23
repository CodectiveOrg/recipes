import type { ReactNode } from "react";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return <div className={styles.home}>Hello, friend!</div>;
}
