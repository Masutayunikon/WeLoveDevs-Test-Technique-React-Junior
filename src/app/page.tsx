'use client';

import JobList from "@/app/components/Job/List";
import { useJobStore } from "@/stores/jobStore";

export default function Page() {
  const { loading, error } = useJobStore();
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Jobs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <JobList />
      )}
    </main>
  );
}
