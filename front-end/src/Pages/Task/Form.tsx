import { useForm } from "react-hook-form"
import { useState } from "react";
import { X } from 'lucide-react';
import { useAuthStore } from "../Components/Value";
import { send_2 } from "../Components/Send";


export type Formdata = {
  Task: string,
  Date: string,
  Uid: string
  id: string;
}
const fields = ["Task", "Date"] as const;
const inputStyle = "border-2 border-gray-300 p-2 mb-4 ";


const Form = () => {
  const setToggle_2 = useAuthStore((s) => s.settoggle_2)
  const Uid = useAuthStore((s) => s.uid)
  const [show, setshow] = useState(false)
  const setcount = useAuthStore((s) => s.setcount)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Formdata>();
  
 
  
  async function onsubmit(data:Formdata) {
    const task = { task: data.Task, date: data.Date, uid: Uid }
    const result = await send_2(task)
    if (result?.message === 'done') {
      setcount(0)
      setToggle_2(false)
      console.log('yes')
    }
    reset();
  }

  

 

  return (
    <div className=" flex flex-col  items-center h-[90vh] ">
          <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col md:w-[500px] max-sm:w-[23rem] m-auto mt-10 gap-5 shadow-xl md:pl-12 md:pr-12 md:pb-12 pt-5 max-sm:p-8 bg-amber-50">
        <div className="flex flex-col">
         <button className="pl-[100%] pb-6 " onClick={ () =>setToggle_2(false)}> <X /></button>
         <h1 className="text-[2rem] pb-2 ">Create your task</h1>
        </div>
        {fields.map((field) => (
            <div key={field} className="flex flex-col gap-3 pb-5">
            <label htmlFor={field}>{field}:</label>
            <input className={inputStyle} type={field === "Task" ? "text" : 'datetime-local'} {...register(field, { required: `${field} is required` })}  onClick={ ()=> show ? setshow(false) : setshow(true) } placeholder={field === "Task" ? "Task" : "Enter date"}  />
            {errors[field] && <p>{errors[field].message}</p>}
                
           </div>
        ))}
         
        <button  className={`${inputStyle} bg-black text-white`}> Submit </button>
      </form>

    </div>
  )
}

export default Form