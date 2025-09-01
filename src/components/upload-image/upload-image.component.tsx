import {
  type ChangeEvent,
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
  type RefObject,
  useRef,
  useState,
} from "react";

import clsx from "clsx";

import IconButtonComponent from "@/components/icon-button/icon-button.component.tsx";

import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./upload-image.module.css";

const MAX_SIZE_MEGABYTE = 1;
const MAX_SIZE_BYTE = MAX_SIZE_MEGABYTE * 1024 * 1024;

type Props = ComponentProps<"input"> & {
  ref?: RefObject<HTMLInputElement>;
  accept?: `image/${string}`;
  previouslyUploadedPicture?: string;
  onRemove: () => unknown;
};

export default function UploadImageComponent({
  ref,
  className,
  previouslyUploadedPicture,
  onChange,
  onRemove,
  ...otherProps
}: Props): ReactNode {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const localRef = useRef<HTMLInputElement | null>(null);
  const mergedRef = ref ?? localRef;

  const updatePreviewUrl = (file: File | null): void => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  const validateInput = (e: ChangeEvent<HTMLInputElement>): File | null => {
    const files = e.target.files;
    if (!(files && files.length > 0)) {
      return null;
    }

    const file = files[0];

    if (!file.type.startsWith("image/")) {
      toast("Please upload a valid image.");
      return null;
    }

    if (file.size > MAX_SIZE_BYTE) {
      toast(`The file size should not exceed ${MAX_SIZE_MEGABYTE}MB.`);
      return null;
    }

    return file;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = validateInput(e);
    if (!file) {
      e.target.value = "";
      return;
    }

    updatePreviewUrl(file);
    onChange?.(e);
  };

  const handleRemoveButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (mergedRef.current) {
      mergedRef.current.value = "";
    }

    updatePreviewUrl(null);
    onRemove?.();
  };

  const isBlank = !previouslyUploadedPicture && !previewUrl;

  const blankContent = (
    <div className={styles.blank}>
      <IconComponent name="upload-bold" />
      <TypographyComponent variant="p2" color="text">
        Add Cover Photo
      </TypographyComponent>
      <TypographyComponent variant="s" color="text-secondary">
        (up to {MAX_SIZE_MEGABYTE} MB)
      </TypographyComponent>
    </div>
  );

  const previewContent = (
    <div className={styles.preview}>
      <img src={previouslyUploadedPicture ?? previewUrl ?? ""} alt="" />
      <IconButtonComponent onClick={handleRemoveButtonClick}>
        <IconComponent name="close-circle-bold" />
      </IconButtonComponent>
    </div>
  );

  return (
    <label className={clsx(styles["upload-image"], className)}>
      <input
        ref={mergedRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        {...otherProps}
      />
      {isBlank ? blankContent : previewContent}
    </label>
  );
}

function toast(message: string): void {
  // TODO: Use toaster provider.
  console.log(message);
}
