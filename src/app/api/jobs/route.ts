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
        body: jobsData
      }, {status: 200});
    } else {
      return NextResponse.json({
        body: { message: 'No jobs found' }
      }, {status: 404});
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({
      body: { message: 'Server error' }
    }, {status: 500});
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
        body: { message: 'Invalid job data' }
      }, {status: 400});
    }

    const jobsRef = ref(database, 'jobs');

    const newJobRef = push(jobsRef);
    job.id = newJobRef.key;

    await set(newJobRef, job);

    return NextResponse.json({
      body: {message: 'Job added successfully', job}
    }, {status: 201});

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({
      body: {message: 'Server error'}
    }, {status: 500});
  }
}
