import type { ComponentProps } from "react";

import clsx from "clsx";

import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./recipe-card.module.css";

type Props = ComponentProps<"div"> & {
  recipeInfo: {
    title: string;
    imageFill: string;
    recipeInfo: {
      owner: string;
      ownerProfile: string;
      cookTime: string;
    };
  };
};

export default function RecipeCardComponent({ recipeInfo, className }: Props) {
  return (
    <div className={clsx(styles["recipe-card"], className)}>
      <TypographyComponent variant="h2" className={styles.title}>
        {recipeInfo.title}
      </TypographyComponent>
      <div className={styles["recipe-info"]}>
        <span className={styles.owner}>
          <img
            src={recipeInfo.recipeInfo.ownerProfile}
            alt="user-profile"
            className="owner-profile"
          />
          <TypographyComponent variant="s" className={styles["owner-name"]}>
            {recipeInfo.recipeInfo.owner}
          </TypographyComponent>
        </span>
        <span className={styles["cook-time"]}>
          <IconComponent name="clock-circle-bold" />
          <TypographyComponent variant="s">
            {recipeInfo.recipeInfo.cookTime}
          </TypographyComponent>
        </span>
      </div>
    </div>
  );
}
