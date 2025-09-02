import type {
  CSSProperties,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  RefObject,
} from "react";

import clsx from "clsx";

import styles from "./modal.module.css";

type Props = PropsWithChildren<{
  ref: RefObject<HTMLDialogElement | null>;
  className?: string;
  minInlineSize?: CSSProperties["inlineSize"];
  onClose: () => void;
}>;

export default function ModalComponent({
  ref,
  className,
  minInlineSize = "20rem",
  onClose,
  children,
}: Props): ReactNode {
  const handleClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  const handleClose = (): void => {
    ref?.current?.close();
  };

  return (
    <dialog
      ref={ref}
      className={clsx(styles.modal, className)}
      style={{ inlineSize: `min(${minInlineSize}, 100%)` }}
      onClick={handleClick}
      onClose={onClose}
    >
      {children}
    </dialog>
  );
}
