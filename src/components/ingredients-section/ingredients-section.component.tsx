import type { ReactNode } from "react";

import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./ingredients-section.module.css";

type Ingredient = {
  title: string;
  quantity: string;
};

type Props = {
  ingredients: Ingredient[];
};

export default function IngredientsSectionComponent({
  ingredients,
}: Props): ReactNode {
  return (
    <div className={styles["ingredients-section"]}>
      <TypographyComponent variant="h2">Ingredients</TypographyComponent>
      <ul>
        {ingredients.map((i, index) => (
          <li key={index}>
            <IconComponent name="check-circle-bold" color="primary" />
            <TypographyComponent span variant="p2">
              {i.quantity}&nbsp;
              {i.title}
            </TypographyComponent>
          </li>
        ))}
      </ul>
    </div>
  );
}
