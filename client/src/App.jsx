import { Routes,Route } from "react-router-dom"
import AuthPage from "./pages/auth"
import Common from "./myAuth/Common"



function App() {

  return (
   <div>
    <Routes>
      <Route path="/auth" element={<AuthPage/>}/>
    </Routes>

    {/* <Routes>
      <Route path="/my-auth" element={<Common/>}/>
    </Routes> */}
   </div>
  )
}

export default App
