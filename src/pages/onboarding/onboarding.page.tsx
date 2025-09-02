import type { ReactNode } from "react";

import { useNavigate } from "react-router";

import image from "@/assets/images/foods.png";

import ButtonComponent from "@/components/button/button.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./onboarding.module.css";

export default function OnboardingPage(): ReactNode {
  const navigate = useNavigate();

  const handleGetStartedButtonClick = (): void => {
    navigate("/login");
  };

  return (
    <div className={styles.onboarding}>
      <header></header>
      <main>
        <img src={image} alt="" />
        <div className={styles.writings}>
          <TypographyComponent variant="h1">Start Cooking</TypographyComponent>
          <TypographyComponent p variant="p1" color="text-secondary">
            Let’s join our community to cook better food!
          </TypographyComponent>
        </div>
        <ButtonComponent onClick={handleGetStartedButtonClick}>
          Get Started
        </ButtonComponent>
      </main>
    </div>
  );
}
