import { type FormEvent, type ReactNode } from "react";

import AuthSection from "@/sections/auth/auth.section.tsx";

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
        <AuthSection
          heading="Welcome Back!"
          submitText="Sign In"
          alternative={{
            text: "Don't have any account?",
            linkHref: "/sign-up",
            linkText: "Sign Up",
          }}
          onSubmit={handleFormSubmit}
        />
      </main>
    </div>
  );
}
