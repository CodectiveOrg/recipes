import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./text-input.module.css";

type Props = ComponentProps<"input"> & {
  fullwidth?: boolean;
  error?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export default function TextInputComponent({
  fullwidth = false,
  className,
  error = false,
  startAdornment,
  endAdornment,
  ...otherProps
}: Props): ReactNode {
  return (
    <label
      className={clsx(
        styles["text-input"],
        error && styles.error,
        fullwidth && styles.fullwidth,
        className,
      )}
    >
      {startAdornment && (
        <div className={clsx(styles.adornment, styles.start)}>
          {startAdornment}
        </div>
      )}
      <input {...otherProps} />
      {endAdornment && (
        <div className={clsx(styles.adornment, styles.end)}>{endAdornment}</div>
      )}
    </label>
  );
}
