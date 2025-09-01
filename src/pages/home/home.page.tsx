import { type FormEvent, type ReactNode, useState } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import UploadImageComponent from "@/components/upload-image/upload-image.component";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  const [value, setValue] = useState<File | null>(null);

  const handleInputChange = (file: File | null): void => {
    setValue(file);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log(value);
  };

  return (
    <div className={styles.home}>
      <header>Header</header>
      <main>
        <form onSubmit={handleFormSubmit}>
          <UploadImageComponent name="cover" onChange={handleInputChange} />
          <ButtonComponent>Submit</ButtonComponent>
        </form>
      </main>
    </div>
  );
}
