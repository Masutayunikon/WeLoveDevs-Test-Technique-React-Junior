'use client'

import {useJobStore} from "@/stores/jobStore";
import {useEffect} from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {fetchJobs} = useJobStore.getState();

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
