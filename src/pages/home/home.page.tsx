import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <header>Header</header>
      <main>
        <ButtonComponent color="secondary">Button</ButtonComponent>
        <ButtonComponent color="secondary" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent color="secondary" size="small">
          Button
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          size="default-with-icon"
          withIcon
          iconName="square-academic-cap-2-bold"
        >
          Button
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          withIcon
          iconName="square-academic-cap-2-bold"
          size="medium-with-icon"
        >
          Button
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          withIcon
          iconName="square-academic-cap-2-bold"
          size="small-with-icon"
        >
          Button
        </ButtonComponent>
        {/*  */}
        <ButtonComponent color="secondary" variant="outline">
          Button
        </ButtonComponent>
        <ButtonComponent color="secondary" variant="outline" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent color="secondary" variant="outline" size="small">
          Button
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          size="default-with-icon"
          withIcon
          variant="outline"
          iconName="square-academic-cap-2-bold"
        >
          Button
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          withIcon
          variant="outline"
          iconName="square-academic-cap-2-bold"
          size="medium-with-icon"
        >
          Button
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          withIcon
          variant="outline"
          iconName="square-academic-cap-2-bold"
          size="small-with-icon"
        >
          Button
        </ButtonComponent>
        {/*  */}
        <ButtonComponent color="secondary" variant="text">
          Button
        </ButtonComponent>
        <ButtonComponent color="secondary" variant="text" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent color="secondary" variant="text" size="small">
          Button
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          variant="text"
          withIcon
          size="default-with-icon"
          iconName="square-academic-cap-2-bold"
        >
          Button
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          variant="text"
          withIcon
          iconName="square-academic-cap-2-bold"
          size="medium-with-icon"
        >
          Button
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          variant="text"
          withIcon
          iconName="square-academic-cap-2-bold"
          size="small-with-icon"
        >
          Button
        </ButtonComponent>
      </main>
    </div>
  );
}
