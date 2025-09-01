import { type ComponentProps, type ReactNode } from "react";

import clsx from "clsx";

import TypographyComponent from "../typography/typography.component";

import styles from "./range-input.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  minLabel: number;
  maxLabel: number;
};
export default function RangeInputComponent({
  className,
  label,
  minLabel,
  maxLabel,
  ...otherProps
}: Props): ReactNode {
  const calculateAvg = (maxLabel + minLabel) / 2;
  return (
    <div className={clsx(styles["range-input"], className)}>
      <label className={styles.title} htmlFor={label}>
        <TypographyComponent variant="h2" color="text">
          {label}
        </TypographyComponent>
        <TypographyComponent variant="p1" color="text-secondary">
          (in minutes)
        </TypographyComponent>
      </label>
      <div className={styles["range-input-container"]}>
        <div className={styles["range-labels"]}>
          <TypographyComponent variant="h3" className={styles["range-label"]}>
            &lt;{minLabel}
          </TypographyComponent>
          <TypographyComponent variant="h3" className={styles["range-label"]}>
            {calculateAvg}
          </TypographyComponent>
          <TypographyComponent variant="h3" className={styles["range-label"]}>
            &gt;{maxLabel}
          </TypographyComponent>
        </div>
        <input className={styles["input-range-slider"]} {...otherProps} />
      </div>
    </div>
  );
}
