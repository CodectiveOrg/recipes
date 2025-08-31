import { type ReactNode, useState } from "react";

import UploadImageComponent from "@/components/upload-image/upload-image.component";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  const [file, setFile] = useState<File | null>(null);
  const handleChangeFile = (file: File | null): void => {
    setFile(file);
  };
  return (
    <div className={styles.home}>
      <header>Header</header>
      <main>
        <UploadImageComponent
          name="upload-recipe-cover"
          file={file}
          handleChangeFile={handleChangeFile}
        />
      </main>
    </div>
  );
}
