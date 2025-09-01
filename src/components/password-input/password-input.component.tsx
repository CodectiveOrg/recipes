import {
  type ComponentProps,
  type HTMLInputTypeAttribute,
  type ReactNode,
  useState,
} from "react";

import clsx from "clsx";

import IconButtonComponent from "@/components/icon-button/icon-button.component.tsx";
import IconComponent from "@/components/icon/icon.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import styles from "./password-input.module.css";

type Props = Omit<
  ComponentProps<typeof TextInputComponent>,
  "type" | "endAdornment"
>;

export default function PasswordInputComponent({
  className,
  ...otherProps
}: Props): ReactNode {
  const [type, setType] = useState<HTMLInputTypeAttribute>("password");

  const handleEyeButtonClick = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <TextInputComponent
      className={clsx(styles["password-input"], className)}
      type={type}
      endAdornment={
        <IconButtonComponent onClick={handleEyeButtonClick}>
          {type === "password" ? (
            <IconComponent name="eye-linear" />
          ) : (
            <IconComponent name="eye-closed-linear" />
          )}
        </IconButtonComponent>
      }
      {...otherProps}
    />
  );
}
