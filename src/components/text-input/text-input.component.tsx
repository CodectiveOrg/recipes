import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./text-input.module.css";

type Props = ComponentProps<"input"> & {
  variant?: "default" | "search";
  state?: "idle" | "success" | "error";
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export default function TextInputComponent({
  className,
  variant = "default",
  state = "idle",
  startAdornment,
  endAdornment,
  ...otherProps
}: Props): ReactNode {
  return (
    <label
      className={clsx(
        styles["text-input"],
        styles[variant],
        styles[state],
        className,
      )}
    >
      {startAdornment && (
        <span className={styles.adornment}>{startAdornment}</span>
      )}
      <input {...otherProps} />
      {endAdornment && <span className={styles.adornment}>{endAdornment}</span>}
    </label>
  );
}
