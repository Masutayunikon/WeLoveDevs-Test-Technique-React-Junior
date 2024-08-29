'use client'

import {useJobStore} from "@/stores/jobStore";
import {useParams} from "next/navigation";
import JobDetails from "@/app/components/Job/Details";
import JobSkills from "@/app/components/Job/Skills";
import Link from "next/link";
import {ArrowLeftIcon} from "@heroicons/react/16/solid";
import React from "react";

export default function Job() {

  const {id} = useParams();

  const {jobs} = useJobStore();

  const job = jobs.find((job) => job.id === id);


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex gap-6">
        <Link href="/"
              className="flex items-center gap-x-1.5 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-full h-4/5 mt-1 hover:bg-blue-700">
          <ArrowLeftIcon className="size-4"/>
        </Link>
      </div>
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
