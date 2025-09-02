import type {
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
  title: string;
  onClose: () => void;
}>;

export default function ModalComponent({
  ref,
  className,
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
      onClick={handleClick}
      onClose={onClose}
    >
      {children}
    </dialog>
  );
}
