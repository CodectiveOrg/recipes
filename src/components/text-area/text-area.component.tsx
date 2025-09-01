import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./text-area.module.css";

type Props = ComponentProps<"textarea">;

export default function TextAreaComponent({
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <textarea
      className={clsx(styles["text-area"], className)}
      {...otherProps}
    ></textarea>
  );
}
