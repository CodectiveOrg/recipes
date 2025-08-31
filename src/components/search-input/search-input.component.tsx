import { type ComponentProps, type ReactNode, useState } from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import styles from "./search-input.module.css";

type Props = ComponentProps<"input">;

export default function SearchInputComponent({
  className,
  ...otherProps
}: Props): ReactNode {
  const [show, setShow] = useState<boolean>(false);

  const onChangeHandler = () => {
    setShow(true);
  };

  return (
    <TextInputComponent
      className={clsx(styles["search-input"], className)}
      startAdornment={<IconComponent name="magnifer-linear" />}
      endAdornment={show && <IconComponent name="close-circle-bold" />}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
}
