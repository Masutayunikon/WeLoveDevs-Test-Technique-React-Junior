'use client'

import {useJobStore} from "@/stores/jobStore";
import {useParams} from "next/navigation";
import JobDetails from "@/app/components/Job/Details";
import JobSkills from "@/app/components/Job/Skills";

export default function Job() {

  const {id} = useParams();

  const {jobs} = useJobStore();

  const job = jobs.find((job) => job.id === id);

  console.log(job);

  return (
    <div className="container mx-auto px-4 py-8">
      {job ? (
        <div className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <h2 className="text-xl text-black mb-2.5 font-semibold">{job.title}</h2>
          {job.details && (
            <JobDetails details={job.details}/>
          )}
          <p className="mt-5 mb-8 text-sm text-gray-600 whitespace-pre-line">{job.description}</p>
          {job.skillsList && (
            <JobSkills skills={job.skillsList}/>
          )}
        </div>
      ) : (
        <p>Job not found.</p>
      )}
    </div>
  )
}
