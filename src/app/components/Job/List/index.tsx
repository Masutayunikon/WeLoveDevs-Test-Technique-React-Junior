'use client'

import {useJobStore} from "@/stores/jobStore";
import Link from "next/link";

export default function Example() {
  const {jobs, error, loading} = useJobStore();

  return (
    <ul role="list" className="space-y-3">
      {jobs.length > 0 ? (
        jobs.map((item) => (
          <Link href={'/job/' + item.id} key={item.id}>
            <li className="overflow-hidden rounded-md px-6 py-4 shadow bg-gray-100 mb-2.5 hover:bg-blue-300">
              <h2 className="text-lg text-black font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.descriptionPreview}</p>
            </li>
          </Link>
        ))
      ) : loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>No jobs available.</p>
      )}
    </ul>
  );
}
