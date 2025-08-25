import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  color?: string;
};
export default function Button({
  className,
  color = "",
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button className={clsx(styles.button, className)} {...otherProps}>
      {children}
    </button>
  );
}
