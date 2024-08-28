import { initializeApp, getApps } from "firebase/app";
import {getDatabase} from "firebase/database";
import * as process from "node:process";
import {get, ref} from "firebase/database"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app, process.env.FIREBASE_DATABASE_URL);

export { database };

export const getJobsData = async () => {
  const headerRef = ref(database, 'jobs');
  const snapshot = await get(headerRef);
  console.log('fetching');
  return snapshot.val();
};
