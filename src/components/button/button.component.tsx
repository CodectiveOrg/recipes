import { type ComponentProps, type ReactNode } from "react";

import clsx from "clsx";

import IconComponent from "../icon/icon.component";

import styles from "./button.module.css";

type Props = ComponentProps<"button"> & {
  className?: string;
  color?: "primary" | "secondary" | "destructive" | "disable";
  variant?: "fill" | "outline" | "text";
  size?:
    | "default"
    | "medium"
    | "small"
    | "default-with-icon"
    | "medium-with-icon"
    | "small-with-icon";
  withIcon?: boolean;
  iconName?: string;
};

export default function ButtonComponent({
  className,
  variant = "fill",
  color = "primary",
  size = "default",
  withIcon = false,
  iconName = "",
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
      {withIcon && <IconComponent name={iconName} className={styles["icon"]} />}
      {children}
    </button>
  );
}
