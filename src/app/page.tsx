'use client';

import JobList from "@/app/components/Job/List";
import { useJobStore } from "@/stores/jobStore";
import Link from "next/link";
import {PlusIcon} from "@heroicons/react/16/solid";

export default function Page() {
  const { loading, error } = useJobStore();
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex gap-6">
        <h1 className="text-3xl font-semibold mb-8">Jobs</h1>
        <Link href='new' className="flex items-center gap-x-1.5 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-full h-4/5 mt-1 hover:bg-blue-700">
            <PlusIcon className="size-4"/>
        </Link>
      </div>
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
