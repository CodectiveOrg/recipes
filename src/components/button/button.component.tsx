import { type ComponentProps, type ReactNode } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = ComponentProps<"button"> & {
  className?: string;
  color?: "primary" | "secondary" | "destructive" | "disable";
  variant?: "default" | "outline" | "text";
  size?: "large" | "medium" | "small";
};

export default function ButtonComponent({
  className,
  variant = "default",
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
      {/* {isIcon && <IconComponent name={iconName} className={styles["icon"]} />}{" "} */}
      {children}
    </button>
  );
}
