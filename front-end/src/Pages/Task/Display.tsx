import { get, remove } from "../Components/Send";
import { useAuthStore } from "../Components/Value";
import { useEffect } from "react";
import { Trash2, Pencil } from "lucide-react";
import { placeholder } from "../Components/Functon";





const Display = () => {
  const inputStyle = "border-2  pt-2 pb-2 pl-5 pr-5 mb-4 text-[1.2rem] rounded-[5px]";
    const uid = useAuthStore((s) => s.uid)
    const count = useAuthStore((s) => s.count)
    const setcount = useAuthStore((s) => s.setcount)
    const settask_2 = useAuthStore((s) => s.settasks_2)
    const task_2 = useAuthStore((s) => s.tasks_2)
    const setres = useAuthStore((s) => s.setresponse)
  const res = useAuthStore((s) => s.response)
  const settoggle_3 = useAuthStore((s) => s.settoggle_3)
  
     useEffect(() => {
    const fetchTasks = async () => {
      const result = await get(uid);
      setcount(1);
      if (result !== 'no data') {
        settask_2(result)
      }
      else {
        setres('You have not set any tasks yet')
      }
    };

    if (uid !== "" && count === 0) {
      fetchTasks();
       }
    else if ( count === 0) {
      fetchTasks();
       }
       
  }, [uid, count, setcount,settask_2,setres]); // dependencies

  

  return (
      <div className="pt-12">
         
      {task_2.map((t) => (
        <div key={t.id} className={`${'flex pb-12 justify-center items-center gap-3'}`}>
          <div className="pt-3 pb-3 pl-5 pr-5 mb-4 text-[1.2rem] bg-amber-200 rounded-[5px] w-[75%] text-center flex flex-col">
            <h1>Task: {t.Task}</h1>
            <h1>Date: {t.Date}</h1>     
            
          </div>
          <div className="flex flex-col">
            <button className={`${inputStyle} bg-[#393433] text-white`} onClick={() => { remove(t.id, uid); setcount(0) }}><Trash2 className="w-8 h-5 text-white" /></button>
            <button className={`${inputStyle} bg-[#393433] text-white`} onClick={() => { settoggle_3(true); placeholder(t.id,t.Task,t.Date)  } }> <Pencil className="w-8 h-5 text-white" /></button>
            </div>
          </div>
      ))}  
      <div className="flex flex-col justify-center items-center">
        {res}
      </div>
      

    </div>
  )
}

export default Display