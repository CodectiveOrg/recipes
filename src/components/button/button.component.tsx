import { type ComponentProps, type ReactNode } from "react";

import { Link } from "react-router";

import clsx from "clsx";

import styles from "./button.module.css";

type SharedProps = {
  className?: string;
  variant?: "solid" | "outlined" | "text";
  color?: "primary" | "secondary" | "danger";
  size?: "large" | "medium" | "small";
};

type ButtonProps = ComponentProps<"button"> & SharedProps;
type LinkButtonProps = ComponentProps<typeof Link> & SharedProps;

export default function ButtonComponent({
  className,
  variant,
  color,
  size,
  children,
  ...otherProps
}: ButtonProps): ReactNode {
  const classNames = useClassNames({ className, variant, color, size });

  return (
    <button className={classNames} {...otherProps}>
      {children}
    </button>
  );
}

export function LinkButtonComponent({
  className,
  variant,
  color,
  size,
  children,
  ...otherProps
}: LinkButtonProps): ReactNode {
  const classNames = useClassNames({ className, variant, color, size });

  return (
    <Link className={classNames} {...otherProps}>
      {children}
    </Link>
  );
}

function useClassNames({
  className,
  variant = "solid",
  color = "primary",
  size = "large",
}: SharedProps): string {
  return clsx(
    styles.button,
    styles[variant],
    styles[size],
    styles[color],
    className,
  );
}
