import { Route, Routes } from "react-router";

import GuestOnlyGuard from "@/guards/guest-only.guard.tsx";
import LoggedInOnlyGuard from "@/guards/logged-in-only.guard.tsx";

import LoggedInLayout from "@/layouts/logged-in/logged-in.layout.tsx";
import RootLayout from "@/layouts/root/root.layout.tsx";

import HelloPage from "@/pages/hello/hello.page.tsx";
import NotFoundPage from "@/pages/not-found/not-found.page.tsx";

import HomePage from "./pages/home/home.page.tsx";

export default function Routing() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<GuestOnlyGuard />}></Route>
        <Route element={<LoggedInLayout />}>
          <Route element={<LoggedInOnlyGuard />}>
            <Route path="hello" element={<HelloPage />} />
          </Route>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
