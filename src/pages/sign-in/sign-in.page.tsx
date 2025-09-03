import { type FormEvent, type ReactNode } from "react";

import { Link } from "react-router";

import ButtonComponent from "@/components/button/button.component";
import IconComponent from "@/components/icon/icon.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";
import TextInputComponent from "@/components/text-input/text-input.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./sign-in.module.css";

export default function SignInPage(): ReactNode {
  const handleFormSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <div className={styles["sign-in"]}>
      <main>
        <div className={styles.writings}>
          <TypographyComponent variant="h1" color="text">
            Welcome Back!
          </TypographyComponent>
          <TypographyComponent p variant="p2" color="text-secondary">
            Please enter your account here
          </TypographyComponent>
        </div>
        <form onSubmit={handleFormSubmit}>
          <TextInputComponent
            placeholder="Email or phone number"
            startAdornment={<IconComponent name="letter-linear" color="text" />}
          />
          <PasswordInputComponent
            placeholder="Password"
            startAdornment={
              <IconComponent name="lock-keyhole-minimalistic-outline" />
            }
          />
          <ButtonComponent>Sign In</ButtonComponent>
        </form>
        <div className={styles.alternative}>
          <TypographyComponent p variant="p2">
            Don't have any account?
          </TypographyComponent>
          <Link className="h3" to="/sign-up">
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
}
