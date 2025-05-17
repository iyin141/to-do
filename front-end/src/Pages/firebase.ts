
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);

const auth = getAuth();


export const Create = async (email :string , password : string): Promise<string>  => { 
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials)
    return "done";
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      // Now TypeScript knows error has .message
      return error.message;
    }
    return "An unknown error occurred";
  }
}

export const login = async (email: string, password: string): Promise<{message: string, value: string}> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    const data = {message : "done" , value : token}
    return data ;
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      return { message: "failed", value: error.message };
    }
    return { message: "failed", value: "An unknown error occurred" };
  }
} 

