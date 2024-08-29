import {get, push, ref, set} from "firebase/database";
import {database} from "@/firebase/firebase";
import {NextResponse} from "next/server";

export async function GET() {
  try {
    const jobsRef = ref(database, 'jobs');
    const snapshot = await get(jobsRef);

    if (snapshot.exists()) {
      const jobsData = Object.values(snapshot.val());
      return NextResponse.json({
        status: 200,
        body: jobsData
      });
    } else {
      return NextResponse.json({
        status: 404,
        body: { message: 'No jobs found' }
      });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({
      status: 500,
      body: { message: 'Server error' }
    });
  }
}

interface Body {
  title: string;
  description: string;
  descriptionPreview: string;
  id?: string | null;
}

export async function POST(req: Request) {
  try {
    const job = await req.json() as Body;

    if (!job.title || !job.description || !job.descriptionPreview) {
      return NextResponse.json({
        status: 400,
        body: { message: 'Invalid job data' }
      });
    }

    const jobsRef = ref(database, 'jobs');

    const newJobRef = push(jobsRef);
    job.id = newJobRef.key;

    await set(newJobRef, job);

    return NextResponse.json({
      status: 201,
      body: {message: 'Job added successfully', job}
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({
      status: 500,
      body: {message: 'Server error'}
    });
  }
}
