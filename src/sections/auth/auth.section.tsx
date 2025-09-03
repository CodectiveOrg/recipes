import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useState,
} from "react";

import { Link } from "react-router";

import clsx from "clsx";

import CheckIcon from "@/icons/check.icon.tsx";

import ButtonComponent from "@/components/button/button.component.tsx";
import IconComponent from "@/components/icon/icon.component.tsx";
import PasswordInputComponent from "@/components/password-input/password-input.component.tsx";
import TextInputComponent from "@/components/text-input/text-input.component.tsx";
import TypographyComponent from "@/components/typography/typography.component.tsx";

import styles from "./auth.module.css";

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
  const [password, setPassword] = useState<string>("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleFormSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    onSubmit?.(e);
  };

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
          value={password}
          onChange={handlePasswordChange}
          startAdornment={
            <IconComponent name="lock-keyhole-minimalistic-outline" />
          }
        />
        {withValidation && (
          <div className={styles.validation}>
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
