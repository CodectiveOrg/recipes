import { Route, Routes } from "react-router";

import GuestOnlyGuard from "@/guards/guest-only.guard.tsx";
import LoggedInOnlyGuard from "@/guards/logged-in-only.guard.tsx";

import HelloPage from "@/pages/hello/hello.page.tsx";

import HomePage from "./pages/home/home.page.tsx";

export default function Routing() {
  return (
    <Routes>
      <Route element={<GuestOnlyGuard />}></Route>
      <Route element={<LoggedInOnlyGuard />}>
        <Route path="hello" element={<HelloPage />} />
      </Route>
      <Route index element={<HomePage />} />
    </Routes>
  );
}
