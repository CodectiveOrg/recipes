import type { ComponentProps } from "react";

import clsx from "clsx";

import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./recipe-card.module.css";

type Props = ComponentProps<"div"> & {
  recipeCard: {
    title: string;
    coverImage: string;
    recipeInfo: {
      owner: string;
      ownerProfile: string;
      cookTime: string;
    };
  };
};

export default function RecipeCardComponent({ recipeCard, className }: Props) {
  return (
    <div className={clsx(styles["recipe-card"], className)}>
      <img
        src={recipeCard.coverImage}
        alt={recipeCard.title}
        className={styles["cover-img"]}
      />

      <TypographyComponent variant="h2" className={styles.title}>
        {recipeCard.title}
      </TypographyComponent>

      <div className={styles["recipe-info"]}>
        <span className={styles.owner}>
          <img
            src={recipeCard.recipeInfo.ownerProfile}
            alt="user-profile"
            className="owner-profile"
          />
          <TypographyComponent variant="s" className={styles["owner-name"]}>
            {recipeCard.recipeInfo.owner}
          </TypographyComponent>
        </span>
        <span className={styles["cook-time"]}>
          <IconComponent name="clock-circle-bold" />
          <TypographyComponent variant="s">
            {recipeCard.recipeInfo.cookTime}
          </TypographyComponent>
        </span>
      </div>
    </div>
  );
}
