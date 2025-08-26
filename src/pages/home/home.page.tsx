import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <ButtonComponent variant="contained">Button</ButtonComponent>
      <ButtonComponent variant="contained" disabled>
        Button
      </ButtonComponent>
      <ButtonComponent variant="outlined">Button</ButtonComponent>
      <ButtonComponent variant="outlined" disabled>
        Button
      </ButtonComponent>
      <ButtonComponent variant="text">Button</ButtonComponent>
      <ButtonComponent variant="text" disabled>
        Button
      </ButtonComponent>
      <ButtonComponent fullwidth variant="contained">
        Button
      </ButtonComponent>
      <ButtonComponent fullwidth variant="contained" disabled>
        Button
      </ButtonComponent>
      <ButtonComponent fullwidth variant="outlined">
        Button
      </ButtonComponent>
      <ButtonComponent fullwidth variant="outlined" disabled>
        Button
      </ButtonComponent>
      <ButtonComponent fullwidth variant="text">
        Button
      </ButtonComponent>
      <ButtonComponent fullwidth variant="text" disabled>
        Button
      </ButtonComponent>
    </div>
  );
}
