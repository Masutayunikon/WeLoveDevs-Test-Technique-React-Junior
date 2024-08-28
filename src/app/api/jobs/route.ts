import {get, ref} from "firebase/database";
import {database} from "@/firebase/firebase";
import {NextResponse} from "next/server";

export async function GET() {
  try {
    // Reference to the 'jobs' node in Firebase
    const jobsRef = ref(database, 'jobs');
    const snapshot = await get(jobsRef);

    // Check if data exists
    console.log('Data exists:', snapshot.exists());
    if (snapshot.exists()) {
      console.log('Data found:', snapshot.val());
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
