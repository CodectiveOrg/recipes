import type { ReactNode } from "react";

import clsx from "clsx";

import CheckIcon from "@/icons/check.icon.tsx";

import TypographyComponent from "@/components/typography/typography.component.tsx";

import styles from "./auth-validation.module.css";

type Rule = {
  title: string;
  isValid: (value: string) => boolean;
};

const rules: Rule[] = [
  {
    title: "At least 4 characters",
    isValid: (value: string) => value.length >= 4,
  },
  {
    title: "Contains a number",
    isValid: (value: string) => /[0-9]/.test(value),
  },
];

type Props = {
  password: string;
};

export default function AuthValidationComponent({
  password,
}: Props): ReactNode {
  return (
    <div className={styles["auth-validation"]}>
      <TypographyComponent p variant="p1">
        Your Password must contain:
      </TypographyComponent>
      <ul className={styles.rules}>
        {rules.map((rule, index) => (
          <li
            key={index}
            className={clsx(
              styles.rule,
              rule.isValid(password) && styles.valid,
            )}
          >
            <span className={styles.circle}>
              <CheckIcon />
            </span>
            <TypographyComponent p variant="p2">
              {rule.title}
            </TypographyComponent>
          </li>
        ))}
      </ul>
    </div>
  );
}
