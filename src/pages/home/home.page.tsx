import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <header>Header</header>
      <main>
        <ButtonComponent>Button</ButtonComponent>
        <ButtonComponent size="medium">Button</ButtonComponent>
        <ButtonComponent size="small">Button</ButtonComponent>
        {/*  */}
        <ButtonComponent variant="outline">Button</ButtonComponent>
        <ButtonComponent variant="outline" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent variant="outline" size="small">
          Button
        </ButtonComponent>
        {/*  */}
        <ButtonComponent variant="text">Button</ButtonComponent>
        <ButtonComponent variant="text" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent variant="text" size="small">
          Button
        </ButtonComponent>
        {/* destructive */}
        <ButtonComponent color="destructive">Button</ButtonComponent>
        <ButtonComponent color="destructive" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent color="destructive" size="small">
          Button
        </ButtonComponent>
        {/*  */}
        <ButtonComponent color="destructive" variant="outline">
          Button
        </ButtonComponent>
        <ButtonComponent color="destructive" variant="outline" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent color="destructive" variant="outline" size="small">
          Button
        </ButtonComponent>
        {/*  */}
        <ButtonComponent color="destructive" variant="text">
          Button
        </ButtonComponent>
        <ButtonComponent color="destructive" variant="text" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent color="destructive" variant="text" size="small">
          Button
        </ButtonComponent>
        {/* secondary */}
        <ButtonComponent color="secondary">Button</ButtonComponent>
        <ButtonComponent color="secondary" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent color="secondary" size="small">
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
        {/* disable */}
        <ButtonComponent color="disable">Button</ButtonComponent>
        <ButtonComponent color="disable" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent color="disable" size="small">
          Button
        </ButtonComponent>
        {/*  */}
        <ButtonComponent color="disable" variant="outline">
          Button
        </ButtonComponent>
        <ButtonComponent color="disable" variant="outline" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent color="disable" variant="outline" size="small">
          Button
        </ButtonComponent>
        {/*  */}
        <ButtonComponent color="disable" variant="text">
          Button
        </ButtonComponent>
        <ButtonComponent color="disable" variant="text" size="medium">
          Button
        </ButtonComponent>
        <ButtonComponent color="disable" variant="text" size="small">
          Button
        </ButtonComponent>
      </main>
    </div>
  );
}
