import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./featured-recipe-card.module.css";

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

export default function FeaturedRecipeCardComponent({
  recipeCard,
  className,
}: Props): ReactNode {
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
          <TypographyComponent
            span
            variant="s"
            className={styles["owner-name"]}
          >
            {recipeCard.recipeInfo.owner}
          </TypographyComponent>
        </span>
        <span className={styles["cook-time"]}>
          <IconComponent name="clock-circle-bold" />
          <TypographyComponent span variant="s">
            {recipeCard.recipeInfo.cookTime}
          </TypographyComponent>
        </span>
      </div>
    </div>
  );
}
