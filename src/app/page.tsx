import {Job} from "@/entities/job";
import JobList from "@/app/components/Job/List";

const getJobs = async () => {
  const response = await fetch('http://localhost:3000/api/jobs');

  if (!response.ok) {
    console.error('Failed to fetch jobs:', response.statusText);
    return [];
  }

  return (await response.json()).body;
}

export default async function Page() {

  const jobs: Job[] = await getJobs();

  console.log(jobs);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Jobs</h1>

      <JobList items={jobs} />
    </main>
  )
}
