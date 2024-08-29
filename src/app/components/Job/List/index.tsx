'use client'

import {useJobStore} from "@/stores/jobStore";

export default function Example() {
  const {jobs, error, loading} = useJobStore();


  // Ensure items is an array and handle cases where it might be undefined or not an array
  if (!Array.isArray(jobs)) {
    console.error('Expected items to be an array, but received:', jobs);
    return <p>No jobs available.</p>;
  }


  return (
    <ul role="list" className="space-y-3">
      {jobs.length > 0 ? (
        jobs.map((item) => (
          <a href={'/job/' + item.id} key={item.id}>
            <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.descriptionPreview}</p>
            </li>
          </a>
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
