import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import IconComponent from "@/components/icon/icon.component.tsx";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <header>Header</header>
      <main>
        {["primary", "secondary", "danger", "disabled"].flatMap((color) =>
          ["solid", "outlined", "text"].flatMap((variant) =>
            [false, true].flatMap((icon, iconIndex) => (
              <div key={iconIndex} className={styles.row}>
                {["large", "medium", "small"].map((size, sizeIndex) => (
                  <ButtonComponent
                    key={sizeIndex}
                    variant={variant}
                    color={color === "disabled" ? "primary" : color}
                    size={size}
                    disabled={color === "disabled"}
                  >
                    {icon && <IconComponent name="widget-linear" />}
                    Button
                  </ButtonComponent>
                ))}
              </div>
            )),
          ),
        )}
      </main>
    </div>
  );
}
