import { useForm } from "react-hook-form"
import { useState } from "react";
import { login } from "../firebase";
import { send } from "../Components/Send";
import { useAuthStore } from "../Components/Value";
import { useNavigate } from "react-router-dom";


type Formdata = {
  Email: string,
  Password:string
}
const fields = ["Email", "Password"] as const;

const inputStyle = "border-2 border-gray-300 p-2 mb-4 ";


const Login = () => {
  const navigate = useNavigate();
  const [show, setshow] = useState(false)
  const [value, setvalue] = useState("")

  const setUid = useAuthStore((s) => s.setUid);
  const setToken = useAuthStore((s) => s.setToken);
  const setToggle = useAuthStore((s) => s.settoggle)
  const setcount_2 = useAuthStore((s) => s.setcount_2)
  const setcount = useAuthStore((s) => s.setcount)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Formdata>();
  
  async function onsubmit(data:Formdata) {
    const result = await login(data.Email, data.Password)
    if (result.message === "done") {
      const user = await send(result.value)
      setUid(user?.uid)
      setToken(user?.token)
      setToggle(true)
      setcount_2(1)
      setcount(0)
      navigate("/Task");
    } else {
      setvalue(result.value)
    }
    reset();
  }

  

 

  return (
    <div className="pt-[2rem] flex flex-col justify-center items-center ">
      <h1 className="text-[2rem] pb-2 ">Login</h1>
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

export default Login
