import { type ChangeEvent, type ReactNode, useRef, useState } from "react";

import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./upload-image.module.css";

type Props = {
  name: string;
  onFileChange?: (file: File | null) => void;
};

export default function UploadImageComponent({
  name,
  onFileChange,
}: Props): ReactNode {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];

      if (!selectedFile.type.startsWith("image/")) {
        setError("It is only possible to upload a photo file.");
        setFile(null);
        onFileChange && onFileChange(null);
        return;
      }

      const maxBytes = 12 * 1024 * 1024;
      if (selectedFile.size > maxBytes) {
        setError("The file size should not exceed 12Mb.");
        setFile(null);
        onFileChange && onFileChange(null);
        return;
      }
      setFile(selectedFile);
      onFileChange && onFileChange(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onFileChange && onFileChange(null);
  };

  const onIconClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className={styles["upload-image-component"]}>
      {!file && (
        <div className={styles["upload-image"]}>
          <input
            type="file"
            name={name}
            accept="image/*"
            ref={inputRef}
            onChange={handleInputFileChange}
          />
          <IconComponent
            onClick={onIconClick}
            name="upload-bold"
            className={styles["icon"]}
          />
        </div>
      )}

      {file && (
        <div className={styles["preview-img"]}>
          <IconComponent
            className={styles["remove-img"]}
            name="close-circle-bold"
            onClick={removeFile}
          >
            حذف فایل
          </IconComponent>
          <img src={URL.createObjectURL(file)} alt="Preview" />
        </div>
      )}
      {error && (
        <TypographyComponent variant="s" className={styles["upload-error"]}>
          {error}
        </TypographyComponent>
      )}

      {!file && !error && (
        <>
          <TypographyComponent variant="p2" color="text">
            Add Cover Photo
          </TypographyComponent>
          <TypographyComponent variant="s" color="text-secondary">
            up to 12 Mb
          </TypographyComponent>
        </>
      )}
    </div>
  );
}
