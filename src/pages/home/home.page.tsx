import { type FormEvent, type ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import UploadImageComponent from "@/components/upload-image/upload-image.component";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get("cover");

    console.log(value);
  };

  return (
    <div className={styles.home}>
      <header>Header</header>
      <main>
        <form onSubmit={handleFormSubmit}>
          <UploadImageComponent name="cover" />
          <ButtonComponent>Submit</ButtonComponent>
        </form>
      </main>
    </div>
  );
}
