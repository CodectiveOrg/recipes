import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./text-input.module.css";

type Props = ComponentProps<"input"> & {
  error?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export default function TextInputComponent({
  className,
  error = false,
  startAdornment,
  endAdornment,
  ...otherProps
}: Props): ReactNode {
  return (
    <label
      className={clsx(styles["text-input"], error && styles.error, className)}
    >
      {startAdornment && (
        <span className={styles.adornment}>{startAdornment}</span>
      )}
      <input {...otherProps} />
      {endAdornment && <span className={styles.adornment}>{endAdornment}</span>}
    </label>
  );
}
