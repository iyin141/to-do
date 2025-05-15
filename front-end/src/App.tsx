
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";
import Nav from "./Pages/Nav";
import { useAuthStore } from "./Pages/Components/Value";
import { useEffect } from "react";


const AppRoutes = () => {
  return useRoutes(routes);
};


const App = () => {

  
  const count_2 = useAuthStore((s) => s.count_2)
  const logout = useAuthStore((s) => s.logout)

  useEffect(() => {
    if (count_2 !== 0) {
      logout()
    }
  },[])

  return (
    <div className="p-0 font-Epilogue  ">
      <BrowserRouter>
        <Nav />
      
      <AppRoutes />
      </BrowserRouter>

    </div>
  )
}

export default App