import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import TypographyComponent from "@/components/typography/typography.component";

import styles from "./text-area.module.css";

type Props = ComponentProps<"textarea">;

export default function TextAreaComponent({
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <textarea
      className={clsx(styles["text-area"], className)}
      {...otherProps}
      rows={10}
    >
      <TypographyComponent variant="s">{children}</TypographyComponent>
    </textarea>
  );
}
