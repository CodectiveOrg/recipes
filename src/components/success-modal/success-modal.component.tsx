import type { ComponentProps, ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import ModalComponent from "@/components/modal/modal.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./success-modal.module.css";

type Props = ComponentProps<typeof ModalComponent> & {
  image?: string;
  title: string;
  text?: string;
  buttonText?: string;
  onAccept?: () => void;
};

export default function SuccessModalComponent({
  image,
  title,
  text,
  buttonText,
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

        {buttonText && (
          <ButtonComponent onClick={onAccept}>{buttonText}</ButtonComponent>
        )}
      </div>
    </ModalComponent>
  );
}
