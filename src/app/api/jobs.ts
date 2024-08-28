import type { NextApiRequest, NextApiResponse } from 'next';
import { database } from '@/firebase/firebase';
import { ref, get, push, set } from 'firebase/database';
import { Job } from '@/entities/job';

// Fetch all jobs from Firebase or add a new job

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      // Reference to the 'jobs' node in Firebase
      const jobsRef = ref(database, 'jobs');
      const snapshot = await get(jobsRef);

      // Check if data exists
      console.log('Data exists:', snapshot.exists());
      if (snapshot.exists()) {
        console.log('Data found:', snapshot.val());
        const jobsData: Job[] = Object.values(snapshot.val());
        return res.status(200).json(jobsData);
      } else {
        return res.status(404).json({ error: 'No jobs found' });
      }
    } else if (req.method === 'POST') {
      // Extract job data from the request body
      const job: Job = req.body;

      // Reference to the 'jobs' node in Firebase
      const jobsRef = ref(database, 'jobs');

      // Add the new job to the 'jobs' node
      const newJobRef = push(jobsRef);
      await set(newJobRef, job);

      // Return the newly created job object
      return res.status(201).json({ message: 'Job added successfully', job });
    } else {
      // Method not allowed
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default handler;
