'use client'

import {useJobStore} from "@/stores/jobStore";
import {useParams} from "next/navigation";

export default function Job() {

  const {id} = useParams();

  const {jobs} = useJobStore();

  const job = jobs.find((job) => job.id === id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Job</h1>

      {job ? (
        <div className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <h2 className="text-lg font-semibold">{job.title}</h2>
          <p className="text-sm text-gray-600">{job.description}</p>
        </div>
      ) : (
        <p>Job not found.</p>
      )}
    </div>
  )
}
