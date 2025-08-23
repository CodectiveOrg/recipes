import { Route, Routes } from "react-router";

import HomePage from "./pages/home/home.page.tsx";

export default function Routing() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}
