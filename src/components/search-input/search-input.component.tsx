import {
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

type Props = Omit<
  ComponentProps<typeof TextInputComponent>,
  "ref" | "type" | "onChange"
> & {
  ref?: RefObject<HTMLInputElement | null>;
  onChange?: () => void;
};

export default function SearchInputComponent({
  ref,
  className,
  onChange,
  ...otherProps
}: Props): ReactNode {
  const localRef = useRef<HTMLInputElement | null>(null);
  const mergedRef = ref ?? localRef;

  const [show, setShow] = useState<boolean>(false);

  const handleCloseButtonClick = () => {
    if (!mergedRef.current) {
      return;
    }

    mergedRef.current.value = "";
    setShow(false);
  };

  const onChangeHandler = () => {
    if (onChange) {
      onChange();
    }

    if (mergedRef.current?.value.length) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <TextInputComponent
      ref={mergedRef}
      className={clsx(styles["search-input"], className)}
      startAdornment={<IconComponent name="magnifer-linear" />}
      type="text"
      endAdornment={
        show && (
          <IconButtonComponent onClick={handleCloseButtonClick}>
            <IconComponent name="close-circle-bold" color="text" />
          </IconButtonComponent>
        )
      }
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
}
