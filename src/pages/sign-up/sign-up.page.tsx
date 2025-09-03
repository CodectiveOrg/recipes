import { type FormEvent, type ReactNode } from "react";

import AuthSection from "@/sections/auth/auth.section.tsx";

import styles from "./sign-up.module.css";

export default function SignUpPage(): ReactNode {
  const handleFormSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <div className={styles["sign-up"]}>
      <main>
        <AuthSection
          withValidation
          heading="Welcome!"
          passwordAutoComplete="new-password"
          submitText="Sign Up"
          alternative={{
            text: "Already have an account?",
            linkHref: "/sign-in",
            linkText: "Sign In",
          }}
          onSubmit={handleFormSubmit}
        />
      </main>
    </div>
  );
}
