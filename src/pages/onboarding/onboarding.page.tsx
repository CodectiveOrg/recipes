import type { ReactNode } from "react";

import { Link } from "react-router";

import TypographyComponent from "@/components/typography/typography.component";

import styles from "./onboarding.module.css";

export default function OnboardingPage(): ReactNode {
  return (
    <div className={styles.onboarding}>
      <main>
        <img src="/images/onboarding.png" alt="" />
        <div className={styles.writings}>
          <TypographyComponent variant="h1">Start Cooking</TypographyComponent>
          <TypographyComponent p variant="p1" color="text-secondary">
            Let's join our community to cook better food!
          </TypographyComponent>
        </div>
        <Link to="/sign-in">Get Started</Link>
      </main>
    </div>
  );
}
