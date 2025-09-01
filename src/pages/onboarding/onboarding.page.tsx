import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./onboarding.module.css";

export default function OnboardingPage(): ReactNode {
  return (
    <div className={styles.onboarding}>
      <header></header>
      <main>
        <TypographyComponent variant="h1">Start Cooking</TypographyComponent>
        <TypographyComponent p variant="p1" color="text-secondary">
          Let’s join our community to cook better food!
        </TypographyComponent>
        <ButtonComponent>Get Started</ButtonComponent>
      </main>
    </div>
  );
}
