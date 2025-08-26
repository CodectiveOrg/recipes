import { type ReactNode } from "react";

import TextInputComponent from "@/components/text-input/text-input.component.tsx";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <TextInputComponent label="Label" placeholder="Placeholder text" />
      <TextInputComponent
        label="Label"
        placeholder="Placeholder text"
        disabled
      />
      <TextInputComponent
        label="Label"
        placeholder="Placeholder text"
        error="This is error text"
      />
      <TextInputComponent fullwidth label="Label" value="Typed text" />
      <TextInputComponent fullwidth label="Label" value="Typed text" disabled />
      <TextInputComponent
        fullwidth
        label="Label"
        value="Typed text"
        error="This is error text"
      />
    </div>
  );
}
