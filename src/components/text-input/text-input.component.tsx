import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./text-input.module.css";

type Props = ComponentProps<"input"> & {
  state?: "idle" | "success" | "error";
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export default function TextInputComponent({
  className,
  state = "idle",
  startAdornment,
  endAdornment,
  ...otherProps
}: Props): ReactNode {
  return (
    <label className={clsx(styles["text-input"], styles[state], className)}>
      {startAdornment && (
        <span className={styles.adornment}>{startAdornment}</span>
      )}
      <input {...otherProps} />
      {endAdornment && (
        <span className={styles.adornment}>
          {endAdornment}
        </span>
      )}
    </label>
  );
}
