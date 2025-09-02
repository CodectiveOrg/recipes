import type { ComponentProps, ReactNode } from "react";

import { Link } from "react-router";

import ModalComponent from "@/components/modal/modal.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./success-modal.module.css";

type Props = ComponentProps<typeof ModalComponent> & {
  image?: string;
  title: string;
  text?: string;
  linkText?: string;
  to?: string;
  onAccept?: () => void;
};

export default function SuccessModalComponent({
  image,
  title,
  text,
  linkText,
  to,
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
          {text && (
            <TypographyComponent p variant="p2">
              {text}
            </TypographyComponent>
          )}
        </div>

        {linkText && to && (
          <Link to={to} onClick={onAccept}>
            {linkText}
          </Link>
        )}
      </div>
    </ModalComponent>
  );
}
