import { type ComponentProps, type ReactNode, useState } from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import styles from "./password-input.module.css";

type Props = ComponentProps<"input"> & {
  valid?: boolean;
};

export default function PasswordInputComponent({
  className,
  valid = false,
  ...otherProps
}: Props): ReactNode {
  const [type, setType] = useState("password");

  const toggleTypeHandler = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <TextInputComponent
      className={clsx(styles["password-input"], className)}
      type={type}
      startAdornment={<IconComponent name="lock-keyhole-minimalistic-bold" />}
      placeholder="Password"
      endAdornment={
        valid ? (
          <IconComponent className={styles.valid} name="check-circle-linear" />
        ) : (
          <IconComponent onClick={toggleTypeHandler} name="eye-linear" />
        )
      }
      {...otherProps}
    />
  );
}
