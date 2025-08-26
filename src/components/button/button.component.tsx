import {
  type ButtonHTMLAttributes,
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
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
}: Props): ReactNode {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleRippleOnMouseDown = (
    event: MouseEvent<HTMLButtonElement>,
  ): void => {
    const button = buttonRef.current;

    if (!button) return;

    setRipples([]);

    const rect = button.getBoundingClientRect();

    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    const left = event.clientX - rect.left - radius;
    const top = event.clientY - rect.top - radius;

    const newRipple: Ripple = {
      key: Date.now(),
      style: {
        width: diameter + "px",
        height: diameter + "px",
        left: left + "px",
        top: top + "px",
      },
    };

    setRipples([newRipple]);

    setTimeout(() => {
      setRipples([]);
    }, 600);
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
      onMouseDown={handleRippleOnMouseDown}
      {...otherProps}
    >
      {children}
      {ripples.map((ripple) => (
        <span key={ripple.key} className={styles.ripple} style={ripple.style} />
      ))}
    </button>
  );
}
