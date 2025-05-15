import { useAuthStore } from "../Components/Value";


const inputStyle = "border-2  pt-2 pb-2 pl-5 pr-5 mb-4 text-[1.2rem] rounded-[5px]";

const Add = () => {
  const setToggle_2 = useAuthStore((s) => s.settoggle_2)

  return (
      <div className="  ">
          <div className="flex justify-center items-center  gap-2  ">
            <p className="pt-2 pb-2 pl-5 pr-5 mb-4 text-[1.2rem] bg-[#D5D0CE] rounded-[5px] w-[75%] text-center">Click the button to add a new task ...</p>
            <button  className={`${inputStyle} bg-[#393433] text-white`} onClick={ () =>setToggle_2(true)}> Add </button>
      </div>
      
    </div>
  )
}

export default Add