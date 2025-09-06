import type { ComponentProps, ReactNode } from "react";

import { Link } from "react-router";

import ButtonComponent from "@/components/button/button.component";
import ModalComponent from "@/components/modal/modal.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./success-modal.module.css";

type Props = ComponentProps<typeof ModalComponent> & {
  image?: string;
  title: string;
  hint?: string;
  href?: string;
  linkText?: string;
  onAccept?: () => void;
};

export default function SuccessModalComponent({
  image,
  title,
  hint,
  href = "/home",
  linkText = "Back To Home",
  onAccept,
  ...otherProps
}: Props): ReactNode {
  return (
    <ModalComponent {...otherProps}>
      <div className={styles["success-modal"]}>
        <div className={styles["image-wrapper"]}>
          <img src={image} alt="" />
        </div>
        <div className={styles.writings}>
          <TypographyComponent variant="h1">{title}</TypographyComponent>
          {hint && (
            <TypographyComponent p variant="p2">
              {hint}
            </TypographyComponent>
          )}
        </div>

        <ButtonComponent as={Link} to={href} onClick={onAccept}>
          <TypographyComponent span variant="h3">
            {linkText}
          </TypographyComponent>
        </ButtonComponent>
      </div>
    </ModalComponent>
  );
}
