import {create} from "zustand";
import {Job} from "@/entities/job";

type JobStore = {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  fetchJobs: () => Promise<void>;
}

export const useJobStore = create<JobStore>((set) => ({
  jobs: [],
  loading: false,
  error: null,
  fetchJobs: async () => {
    set({loading: true});
    try {
      const response = await fetch('http://localhost:3000/api/jobs', {
        cache: 'force-cache',
        next: {
          revalidate: 300,
        },
      });
      const data = await response.json();

      if (!response.ok) {
        console.error('Failed to fetch jobs:', response.statusText);
        set({error: response.statusText});
        return;
      }

      console.log('Data:', data.body);

      set({jobs: data.body as Job[], loading: false});
    } catch (error) {
      console.error('Error fetching jobs:', error);
      set({error: 'Failed to fetch jobs', loading: false});
    }
  }
}));


