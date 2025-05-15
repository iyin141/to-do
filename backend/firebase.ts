
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,getIdToken } from "firebase/auth";
import  admin from 'firebase-admin';
import * as fs from 'fs';
import { getDatabase , ref, set , get ,push, query, orderByChild, equalTo , update ,remove } from "firebase/database";

const serviceAccount = JSON.parse(fs.readFileSync('./service.json', 'utf8'));

  admin.initializeApp({
   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });



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

