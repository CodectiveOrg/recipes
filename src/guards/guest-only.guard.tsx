import type { ReactNode } from "react";

import { Navigate, Outlet } from "react-router";

import useVerifyQuery from "@/queries/use-verify.query.ts";

export default function GuestOnlyGuard(): ReactNode {
  const { isPending, isError } = useVerifyQuery();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
}
