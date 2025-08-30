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
    maxLines?: number;
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
  maxLines,
  children,
}: Props): ReactNode {
  const Component = p ? "p" : span ? "span" : "div";

  const maxLinesStyle = {
    display: "-webkit-box",
    "-webkit-line-clamp": `${maxLines}`,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  } as CSSProperties;

  return (
    <Component
      className={clsx(
        styles.typography,
        ellipsis && styles.ellipsis,
        variant,
        styles[color],
        className,
      )}
      style={{
        ...(maxLines ? maxLinesStyle : {}),
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
