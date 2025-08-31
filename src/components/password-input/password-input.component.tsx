import { type ComponentProps, type ReactNode, useState } from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import styles from "./password-input.module.css";

type Props = ComponentProps<"input">;

export default function PasswordInputComponent({
  className,
  ...otherProps
}: Props): ReactNode {
  const [type, setType] = useState("password");

  const onEndAdornmentClickHandler = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <TextInputComponent
      className={clsx(styles["password-input"], className)}
      type={type}
      startAdornment={<IconComponent name="lock-keyhole-minimalistic-bold" />}
      placeholder="Password"
      endAdornment={<IconComponent name="eye-linear" />}
      onEndAdornmentClick={onEndAdornmentClickHandler}
      {...otherProps}
    />
  );
}
