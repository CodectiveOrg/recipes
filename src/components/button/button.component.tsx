import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = ComponentProps<"button"> & {
  className?: string;
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
};

export default function ButtonComponent({
  className,
  variant = "contained",
  fullWidth = false,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        fullWidth && styles.fullWidth,
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
