import {
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
  type RefObject,
  useRef,
  useState,
} from "react";

import clsx from "clsx";

import IconButtonComponent from "@/components/icon-button/icon-button.component";
import IconComponent from "@/components/icon/icon.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import styles from "./search-input.module.css";

type Props = Omit<ComponentProps<typeof TextInputComponent>, "ref" | "type"> & {
  ref?: RefObject<HTMLInputElement | null>;
};

export default function SearchInputComponent({
  ref,
  className,
  onChange,
  ...otherProps
}: Props): ReactNode {
  const localRef = useRef<HTMLInputElement | null>(null);
  const finalRef = ref ?? localRef;

  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleClearButtonClick = (): void => {
    if (!finalRef.current) {
      return;
    }

    finalRef.current.value = "";
    setIsFilled(false);
  };

  const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsFilled(!!finalRef.current?.value);
    onChange?.(e);
  };

  return (
    <TextInputComponent
      ref={finalRef}
      className={clsx(styles["search-input"], className)}
      type="text"
      variant="search"
      startAdornment={<IconComponent name="magnifer-linear" />}
      endAdornment={
        isFilled && (
          <IconButtonComponent onClick={handleClearButtonClick}>
            <IconComponent name="close-circle-bold" color="text" />
          </IconButtonComponent>
        )
      }
      onChange={handleTextInputChange}
      {...otherProps}
    />
  );
}
