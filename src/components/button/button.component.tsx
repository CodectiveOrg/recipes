import { type ComponentProps, type ReactNode } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = ComponentProps<"button"> & {
  variant?: "solid" | "outlined" | "text";
  color?: "primary" | "secondary" | "danger";
  size?: "large" | "medium" | "small";
};

export default function ButtonComponent({
  className,
  variant = "solid",
  color = "primary",
  size = "large",
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[color],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
