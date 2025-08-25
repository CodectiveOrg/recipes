import {
  type ComponentProps,
  type ComponentPropsWithRef,
  type ReactNode,
  useId,
} from "react";

import clsx from "clsx";

import styles from "./text-input.module.css";

type Props = ComponentPropsWithRef<"input"> & {
  label: string;
  size?: "default" | "large";
  error?: boolean;
  errorText?: string;
};

export default function TextInputComponent({
  ref,
  label,
  error = false,
  errorText = "This is error text",
  className,
  ...otherProps
}: Props): ReactNode {
  const fallbackId = useId();
  const id = otherProps.id || fallbackId;

  const placeholder = otherProps.placeholder || " ";

  return (
    <div className={clsx(styles.input, className)}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={ref}
        placeholder={placeholder}
        {...otherProps}
      />
      {error && <p>{errorText}</p>}
    </div>
  );
}
