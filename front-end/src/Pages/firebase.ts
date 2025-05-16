
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";




const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.FIREBASE_DATABASE_URL,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);

const auth = getAuth();


export const Create = async (email :string , password : string): Promise<string>  => { 
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    
    return "done";
  }
  catch (error : any) {
    const errormessage = error.message;
    return errormessage;
  }
}

export const login = async (email: string, password: string): Promise<{message: string, value: string}> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    const data = {message : "done" , value : token}
    return data ;
  }
  catch (error) {
    const errormessage = error.message;
    const data = {message : "failed" , value : errormessage}
    return data;
  }
} 

login("iyinpelumi@gmail.com","iyinadmin88")







