
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,getIdToken } from "firebase/auth";
import  admin from 'firebase-admin';
import { getDatabase , ref, set , get ,push, query, orderByChild, equalTo , update ,remove } from "firebase/database";
import dotenv from "dotenv";
dotenv.config();

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY ,
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_AUTH_URI,
  "token_uri": process.env.FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url":process.env.FIREBASE_CLIENT_X509_CERT_URL,
  "universe_domain": process.env.FIREBASE_UNIVERSE_DOMAIN
}
;

  admin.initializeApp({
   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });



const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ,
  databaseURL: process.env.FIREBASE_DATABASE_URL ,
  projectId: process.env.FIREBASE_PROJECT_ID ,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ,
  appId: process.env.FIREBASE_APP_ID ,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
  
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();


export const Create = async (email :string , password : string): Promise<string>  => { 
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;
    return "done";
  }
  catch (error : any) {
    const errorcode = error.code;
    const errormessage = error.message;
    return errormessage;
  }
}

export const login = async (email: string, password: string): Promise<string> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await userCredential.user.getIdToken();
    return "done";
  }
  catch (error : any ) {
    const errorcode = error.code;
    const errormessage = error.message;
    return errormessage;
  }
} 


export const Log_task = async (Task:string , Date:string,Uid:string ) => {
  try {
    const db = getDatabase();
    const postListRef = ref(db, 'Tasklogs/' + Uid + '/' + 'Userlogs' );
    const newPostRef = push(postListRef);
    set(newPostRef, {
      task:{Task,Date}
});
    return {message:'done'};
  }
  catch (error : any ) {
   console.log(error)
  }
} 



export const Fetch_task = async (Uid:string) => {
  try {
    const db = getDatabase();
    const userTaskRef = query(
      ref(db,  'Tasklogs/' + Uid + '/' + 'Userlogs')
    );

    const snapshot = await get(userTaskRef);

    if (snapshot.exists()) {
      const rawData = snapshot.val();

      // Convert raw object to array of tasks
      const taskList = Object.entries(rawData).map(([key, value]: any) => ({
        id: key, 
        ...value.task, 
      }));
      return taskList;
    } else {
      console.log("No data found");
      return 'no data';
    }
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    return [];
  }
};


export const update_task = async (Uid:string,id:string,task:string,date:string) => {
  try {
    const db = getDatabase();
    const userpath = 'Tasklogs/' + Uid + '/' + 'Userlogs/' + id 

    const postData = {
      task:{Task: task, Date:date}
  };

      await update(ref(db,userpath),postData)
       
    return {Task: task, Date:date , message:'done'};


  }
   catch (error: any) {
    console.error("Fetch error:", error.message);
  }
};


export const delete_task = async (Uid:string,id:string,) => {
  try {
    const db = getDatabase();
    const userpath = 'Tasklogs/' + Uid + '/' + 'Userlogs/' + id 


    remove(ref(db,userpath))
       
  


  }
   catch (error: any) {
    console.error("Fetch error:", error.message);
  }
};

