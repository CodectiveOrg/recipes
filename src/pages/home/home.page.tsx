import { type FormEvent, type ReactNode, useRef } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import UploadImageComponent from "@/components/upload-image/upload-image.component";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  const ref = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log(ref.current?.value);
  };

  return (
    <div className={styles.home}>
      <header>Header</header>
      <main>
        <form onSubmit={handleFormSubmit}>
          <UploadImageComponent ref={ref} />
          <ButtonComponent>Submit</ButtonComponent>
        </form>
      </main>
    </div>
  );
}
