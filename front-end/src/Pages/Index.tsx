import { useNavigate } from "react-router-dom"


const Home = () => {
  const inputStyle = "border-2  pt-2 pb-2 pl-5 pr-5 mb-4 text-[1.2rem] rounded-[5px]";
  const navigate = useNavigate();
  return (
    <div className="p-8 flex justify-around gap-5 flex-wrap">
       <div>
        <img src="./src/assets/Hero_2.png" className="md:h-[50vh] lg:h-[70vh] max-sm:h-[40vh] w-[100%]" alt=""/>
      </div>
      <div className="flex flex-col gap-6 text-center pt-12">
        <h1 className="text-[2.5rem] font-bold">To-do List</h1>
        <h1 className="text-[2rem]">Tired of having a scattered surrounding </h1>
        <h2 className='flex justify-center text-[1rem]'>Organize your work and life, finally. <span role="img" aria-label="smiling face">😊</span></h2>
        <div className="flex gap-3 justify-center">
          <button className={`${inputStyle} bg-[#393433] text-white`} onClick={() => navigate('/Login')}>Log in</button>
          <button className={`${inputStyle} bg-[#393433] text-white`}  onClick={() => navigate('/Sign')}>Sign up</button>
       </div>
      </div>
    </div>
  )
}

export default Home