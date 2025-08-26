import type { ReactNode } from "react";

import { Link } from "react-router";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      Hello, friend!
      <br />
      <Link to="/hello">Hello!</Link>
    </div>
  );
}
