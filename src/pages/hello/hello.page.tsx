import type { ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";

import { getHelloApi } from "@/api/public/get-hello.api.ts";

import styles from "./hello.module.css";

export default function HelloPage(): ReactNode {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hello"],
    queryFn: getHelloApi,
  });

  if (isPending) {
    return <div className={styles.hello}>Loading...</div>;
  }

  if (isError) {
    return <div className={styles.hello}>Error: {error.message}</div>;
  }

  return <div className={styles.hello}>{data.message}</div>;
}
