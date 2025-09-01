import { type FormEvent, type ReactNode } from "react";

import clsx from "clsx";

import ButtonComponent from "@/components/button/button.component";
import IconComponent from "@/components/icon/icon.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";
import TextInputComponent from "@/components/text-input/text-input.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./sign-up.module.css";

const RULES = ["Atleast 6 characters", "Contains a number"];

export default function SignUpPage(): ReactNode {
  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
  };

  const isPassed = () => false;

  return (
    <div className={styles["sign-up"]}>
      <header></header>
      <main>
        <div className={styles.writings}>
          <TypographyComponent variant="h1" color="text">
            Welcome!
          </TypographyComponent>
          <TypographyComponent p variant="p2" color="text-secondary">
            Please enter your account here
          </TypographyComponent>
        </div>
        <form onSubmit={formSubmitHandler}>
          <TextInputComponent
            placeholder="Email or phone number"
            id="email"
            startAdornment={<IconComponent name="letter-linear" color="text" />}
          />
          <PasswordInputComponent
            placeholder="Password"
            id="password"
            startAdornment={
              <IconComponent name="lock-keyhole-minimalistic-outline" />
            }
          />
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
          <ButtonComponent>Sign Up</ButtonComponent>
        </form>
      </main>
    </div>
  );
}
