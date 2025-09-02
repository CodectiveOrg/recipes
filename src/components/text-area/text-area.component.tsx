import type { CSSProperties, ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./text-area.module.css";

type Props = ComponentProps<"textarea"> & {
  defaultLines?: number;
  minLines?: number;
  maxLines?: number;
};

export default function TextAreaComponent({
  className,
  style,
  defaultLines = 3,
  minLines = 1,
  maxLines = 5,
  ...otherProps
}: Props): ReactNode {
  const customStyles = {
    "--default-lines": `${defaultLines}`,
    "--min-lines": `${minLines}`,
    "--max-lines": `${maxLines}`,
  } as CSSProperties;

  return (
    <textarea
      className={clsx(styles["text-area"], className)}
      style={{
        ...customStyles,
        ...style,
      }}
      {...otherProps}
    ></textarea>
  );
}
