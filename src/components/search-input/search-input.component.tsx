import { type ComponentProps, type ReactNode, useRef, useState } from "react";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import styles from "./search-input.module.css";

type Props = ComponentProps<"input">;

export default function SearchInputComponent({
  className,
  ...otherProps
}: Props): ReactNode {
  const inputRef = useRef<HTMLInputElement>(null);

  const [show, setShow] = useState<boolean>(false);

  const clearHandler = () => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.value = "";
  };

  const onChangeHandler = () => {
    if (inputRef.current?.value.length) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <TextInputComponent
      ref={inputRef}
      className={clsx(styles["search-input"], className)}
      startAdornment={<IconComponent name="magnifer-linear" />}
      placeholder="Search"
      endAdornment={
        show && (
          <IconComponent onClick={clearHandler} name="close-circle-bold" />
        )
      }
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
}
