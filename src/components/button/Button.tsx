import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  variant?: "contained" | "outlined" | "text";
  size?: "medium" | "large";
};
export default function Button({
  className,
  variant = "contained",
  size = "medium",
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
}
