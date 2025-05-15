
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyB-vEKHrlwsSt4MRL7-taeqT1PKrWjhivU",
  authDomain: "practice-32441.firebaseapp.com",
  databaseURL: "https://practice-32441-default-rtdb.firebaseio.com",
  projectId: "practice-32441",
  storageBucket: "practice-32441.firebasestorage.app",
  messagingSenderId: "293771923831",
  appId: "1:293771923831:web:3977720cfc41c87dab1172",
  measurementId: "G-W7RV41N75T"
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







