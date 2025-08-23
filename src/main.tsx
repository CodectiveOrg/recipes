import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

import QueryProvider from "@/providers/query.provider.tsx";

import Routing from "./routing.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <Routing />
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>,
);
