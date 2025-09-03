import type { ReactNode } from "react";

import { Navigate, Outlet } from "react-router";

import useVerifyQuery from "@/queries/use-verify.query.ts";

export default function LoggedInOnlyGuard(): ReactNode {
  const { isPending, isError } = useVerifyQuery();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
}
