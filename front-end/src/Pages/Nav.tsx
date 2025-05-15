import { useNavigate } from "react-router-dom"
import { useAuthStore } from "./Components/Value";


const Nav = () => {
  const navigate = useNavigate();
  const toggle = useAuthStore((s) => s.toggle);
  const logout = useAuthStore((s) => s.logout)
  const link = `${toggle ? 'hidden' : 'block'} hover:border-b-1`;
  const link_2 = `${toggle ? 'block' : 'hidden'} hover:border-b-1`;
  return (
      <div className="p-5">
        <div className="flex justify-between ">
        <img src="./src/assets/logo.png" alt="" className="w-[3rem]" onClick={() => navigate("/")}></img>
        <ul className="flex pt-3 gap-12">
          <li className={`${link}`} onClick={() => navigate('/Login')}><a href={toggle ? '/Login' : ''}>Login</a></li>
          <li className={`${link}`} onClick={() => navigate('/Sign')}><a href={toggle ? '/Sign' : ''}>Sign up</a></li>
          <li className={`${link_2}`} onClick={() => {
            navigate("/");
            logout()
          }}><a href="/">Logout</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Nav