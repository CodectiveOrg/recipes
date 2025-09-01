import { type ReactNode } from "react";

import UploadImageComponent from "@/components/upload-image/upload-image.component";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <header>Header</header>
      <main>
        <UploadImageComponent />
      </main>
    </div>
  );
}
