import type { FormEvent, ReactNode } from "react";

import { Link } from "react-router";

import clsx from "clsx";

import ButtonComponent from "@/components/button/button.component.tsx";
import IconComponent from "@/components/icon/icon.component.tsx";
import PasswordInputComponent from "@/components/password-input/password-input.component.tsx";
import TextInputComponent from "@/components/text-input/text-input.component.tsx";
import TypographyComponent from "@/components/typography/typography.component.tsx";

import styles from "./auth.module.css";

const RULES = ["Atleast 6 characters", "Contains a number"];

type Alternative = {
  text: string;
  linkHref: string;
  linkText: string;
};

type Props = {
  withValidation?: boolean;
  heading: string;
  submitText: string;
  alternative: Alternative;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

export default function AuthSection({
  withValidation = false,
  heading,
  submitText,
  alternative,
  onSubmit,
}: Props): ReactNode {
  const handleFormSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    onSubmit?.(e);
  };

  const isPassed = (): boolean => false;

  return (
    <div className={styles.auth}>
      <div className={styles.writings}>
        <TypographyComponent variant="h1">{heading}</TypographyComponent>
        <TypographyComponent p variant="p2" color="text-secondary">
          Please enter your account here
        </TypographyComponent>
      </div>
      <form onSubmit={handleFormSubmit}>
        <TextInputComponent
          placeholder="Username"
          startAdornment={<IconComponent name="user-linear" color="text" />}
        />
        <PasswordInputComponent
          placeholder="Password"
          startAdornment={
            <IconComponent name="lock-keyhole-minimalistic-outline" />
          }
        />
        {withValidation && (
          <div className={styles.rules}>
            <TypographyComponent p variant="p1">
              Your Password must contain:
            </TypographyComponent>
            {RULES.map((rule, index) => (
              <div
                key={index}
                className={clsx(styles.rule, isPassed() ? "passed" : "")}
              >
                <IconComponent name="check-circle-bold"></IconComponent>
                <TypographyComponent p variant="p2">
                  {rule}
                </TypographyComponent>
              </div>
            ))}
          </div>
        )}
        <ButtonComponent>{submitText}</ButtonComponent>
      </form>
      <div className={styles.alternative}>
        <TypographyComponent p variant="p2">
          {alternative.text}
        </TypographyComponent>
        <Link className="h3" to={alternative.linkHref}>
          {alternative.linkText}
        </Link>
      </div>
    </div>
  );
}
