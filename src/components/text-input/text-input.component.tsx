import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./text-input.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  fullwidth?: boolean;
  error?: boolean | string | null;
};

export default function TextInputComponent({
  label,
  fullwidth = false,
  error = null,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <label
      className={clsx(
        styles["text-input"],
        fullwidth && styles.fullwidth,
        error && styles.error,
        className,
      )}
    >
      <span className={styles.label}>{label}</span>
      <input {...otherProps} />
      {error && typeof error === "string" && (
        <span className={styles.error}>{error}</span>
      )}
    </label>
  );
}
