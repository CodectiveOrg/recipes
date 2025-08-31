import {
  type ChangeEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./upload-image.module.css";

type Props = {
  name: string;
  file: File | null;
  handleChangeFile: (file: File | null) => void;
};

export default function UploadImageComponent({
  name,
  file,
  handleChangeFile,
}: Props): ReactNode {
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleChangeInputFile = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setError(null);
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];

      if (!selectedFile.type.startsWith("image/")) {
        setError("It is only possible to upload a photo file.");
        handleChangeFile(null);

        return;
      }

      const maxBytes = 1.43 * 1024 * 1024;
      if (selectedFile.size > maxBytes) {
        setError("The file size should not exceed 12Mb.");
        handleChangeFile(null);

        return;
      }
      handleChangeFile(selectedFile);
    }
  };

  const removeFile = (): void => {
    handleChangeFile(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const onIconClick = (): void => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.click();
    }
  };

  return (
    <div className={styles["upload-image-component"]}>
      {
        <div className={styles["upload-image"]}>
          {(!file || previewUrl) && (
            <input
              type="file"
              name={name}
              accept="image/*"
              ref={inputRef}
              onChange={handleChangeInputFile}
            />
          )}
          {!file && (
            <IconComponent
              onClick={onIconClick}
              name="upload-bold"
              className={styles["icon"]}
            />
          )}
        </div>
      }

      {file && (
        <div className={styles["preview-img"]}>
          <IconComponent
            className={styles["remove-img"]}
            name="close-circle-bold"
            onClick={removeFile}
          >
            حذف فایل
          </IconComponent>
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              onClick={onIconClick}
              style={{ cursor: "pointer" }}
            />
          )}
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
