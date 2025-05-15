import { useForm } from "react-hook-form"
import { useState } from "react";
import { useAuthStore } from "../Components/Value";
import { useNavigate } from "react-router-dom";
import { login } from "../firebase";
import { send } from "../Components/Send";

type Formdata = {
  Email: string,
  Password:string
}
const fields = ["Email", "Password"] as const;

const inputStyle = "border-2 border-gray-300 p-2 mb-4 ";


const Sign = () => {
   const navigate = useNavigate();
  const [show, setshow] = useState(false)
  const [value, setvalue] = useState("")
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Formdata>();
  
  const setUid = useAuthStore((s) => s.setUid);
  const setToken = useAuthStore((s) => s.setToken);
  const setToggle = useAuthStore((s) => s.settoggle)
  
  async function onsubmit(data:Formdata) {
    try {
      const response = await fetch('http://localhost:5001/log', {
        method: 'Post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const result = await response.json();
      if (result !== "done") {
        console.log(result);
        setvalue(result)
      } else {
        const result = await login(data.Email, data.Password)
              const user = await send(result.value)
              setUid(user?.uid)
              setToken(user?.token)
              setToggle(true)
              navigate("/Task");     
      }
    }
    
    catch (error) {
      alert(error)
    }
    reset();
  }

  

 

  return (
    <div className="pt-[2rem] flex flex-col justify-center items-center ">
      <h1 className="text-[2rem] pb-2 ">Sign up</h1>
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col md:w-[500px] max-sm:w-[23rem] m-auto mt-10 gap-5">
        {fields.map((field) => (
            <div key={field} className="flex flex-col gap-3 pb-5">
            <label htmlFor={field}>{field}:</label>
            <input className={inputStyle} type={field === "Email" ? "Email" : show ? 'text' : 'password' } {...register(field, { required: `${field} is required` })}  onClick={ ()=> show ? setshow(false) : setshow(true) } placeholder={field === "Email" ? "Email" : "Click to show password"} />
            {errors[field] && <p>{errors[field].message}</p>}
           </div>
         ))}
        {value}
        <button  className={`${inputStyle} bg-black text-white`}> Submit </button>
      </form>

    </div>
  )
}

export default Sign