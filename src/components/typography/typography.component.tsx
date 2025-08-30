import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

import styles from "./typography.module.css";

type VariantType = "h1" | "h2" | "h3" | "p1" | "p2" | "s";

type ColorType = "text" | "text-secondary";

type Props = PropsWithChildren<
  ({ p?: boolean; span?: never } | { p?: never; span?: boolean }) & {
    ellipsis?: boolean;
    className?: string;
    style?: CSSProperties;
    variant: VariantType;
    color?: ColorType;
  }
>;

export default function TypographyComponent({
  p = false,
  span = false,
  ellipsis = false,
  className,
  style,
  variant,
  color = "text",
  children,
}: Props): ReactNode {
  const Component = p ? "p" : span ? "span" : "div";

  return (
    <Component
      className={clsx(
        styles.typography,
        ellipsis && styles.ellipsis,
        variant,
        styles[color],
        className,
      )}
      style={style}
    >
      {children}
    </Component>
  );
}
