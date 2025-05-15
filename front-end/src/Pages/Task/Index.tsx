import Add from "./Add"
import Form from "./Form"
import { useAuthStore } from "../Components/Value";
import Display from "./Display";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Update from "./Update";

const Task = () => {
   const navigate = useNavigate();
  const toggle_2 = useAuthStore((s) => s.toggle_2);
  const toggle_3 = useAuthStore((s) => s.toggle_3)
  const uid = useAuthStore((s) => s.uid)
  useEffect(() => {
    if (uid === '') {
       navigate("/Login");
     }
  })
  return (
    <div className=" pt-5">
      <div className={`${toggle_2 ? 'z-20 absolute  text-center h-[100vh] w-[100%] shadow-xl p-12  ' : 'hidden'}`}>
        <Form />
        
      </div>
      <div className={`${toggle_3 ? 'z-20 absolute  text-center h-[100vh] w-[100%] shadow-xl p-12  ' : 'hidden'}`}>
          <Update />
      </div>
    
      <div className={`${toggle_2 || toggle_3 ? 'z-10 absolute w-full opacity-10' : 'z-10 absolute w-full'}`}>
        <Add />
        <Display />
      </div>
     
    </div>
  )
}

export default Task