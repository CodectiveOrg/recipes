import { type ComponentProps, type ReactNode } from "react";

import clsx from "clsx";

import TypographyComponent from "../typography/typography.component";

import styles from "./range-input.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
};
export default function RangeInputComponent({
  className,
  label,
  ...otherProps
}: Props): ReactNode {
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
            &lt;10
          </TypographyComponent>
          <TypographyComponent variant="h3" className={styles["range-label"]}>
            35
          </TypographyComponent>
          <TypographyComponent variant="h3" className={styles["range-label"]}>
            &gt;60
          </TypographyComponent>
        </div>
        <input className={styles["input-range-slider"]} {...otherProps} />
      </div>
    </div>
  );
}

/**
 * usage:
 *  <RangeInputComponent
          type="range"
          min={10}
          max={60}
          value={value}
          onChange={(e)=>setValue(Number(e.target.value))}
          label="Cooking Duration"
          style={{ "--fill-percentage": `${percentage}%` } as CSSProperties}
        />
     const percentage = ((value - 10) / (60 - 10)) * 100;
 */
