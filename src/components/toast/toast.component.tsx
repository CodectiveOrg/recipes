import type { ReactNode } from "react";

import { Slide, ToastContainer } from "react-toastify";

export default function ToastComponent(): ReactNode {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
  );
}
