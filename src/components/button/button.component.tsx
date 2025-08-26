import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = ComponentProps<"button"> & {
  className?: string;
  variant?: "contained" | "outlined" | "text";
  fullwidth?: boolean;
};

export default function ButtonComponent({
  className,
  variant = "contained",
  fullwidth = false,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        fullwidth && styles.fullwidth,
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
