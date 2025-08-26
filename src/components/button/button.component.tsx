import {
  type ButtonHTMLAttributes,
  type ComponentProps,
  type JSX,
  type MouseEvent,
  useRef,
  useState,
} from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = ComponentProps<"button"> & {
  className?: string;
  variant?: "contained" | "outlined" | "text";
  fullwidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Ripple = {
  key: number;
  style: React.CSSProperties;
};

export default function ButtonComponent({
  className,
  variant = "contained",
  fullwidth = false,
  children,
  ...otherProps
}: Props): JSX.Element {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: MouseEvent<HTMLButtonElement>): void => {
    const button = buttonRef.current;

    if (!button) return;

    setRipples([]);

    const rect = button.getBoundingClientRect();

    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    let left = event.clientX - rect.left - radius;
    let top = event.clientY - rect.top - radius;

    const newRipple: Ripple = {
      key: Date.now(),
      style: {
        width: diameter + "px",
        height: diameter + "px",
        left: left + "px",
        top: top + "px",
        position: "absolute",
      },
    };

    setRipples([newRipple]);

    setTimeout(() => {
      setRipples([]);
    }, 1500);
  };

  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        fullwidth && styles.fullwidth,
        className,
      )}
      ref={buttonRef}
      onMouseDown={createRipple}
      {...otherProps}
    >
      {children}
      {ripples.map((ripple) => (
        <span key={ripple.key} className={styles.ripple} style={ripple.style} />
      ))}
    </button>
  );
}
