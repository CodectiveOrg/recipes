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

export default function ButtonComponent(props: ButtonProps): ReactNode {
  const { className, children, ...otherProps } = usePropsHook(props);

  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
}

export function LinkButtonComponent(props: LinkButtonProps): ReactNode {
  const { className, children, ...otherProps } = usePropsHook(props);

  return (
    <Link className={className} {...otherProps}>
      {children}
    </Link>
  );
}

type UnionProps = ComponentProps<"button"> | ComponentProps<typeof Link>;

type HookResult<T extends UnionProps> = Omit<
  T & SharedProps,
  "className" | "color" | "variant" | "size"
> & {
  className: string;
};

function usePropsHook<T extends UnionProps>({
  className,
  variant = "solid",
  color = "primary",
  size = "large",
  ...otherProps
}: T & SharedProps): HookResult<T> {
  const classNames = clsx(
    styles.button,
    styles[variant],
    styles[size],
    styles[color],
    className,
  );

  return { className: classNames, ...otherProps };
}
