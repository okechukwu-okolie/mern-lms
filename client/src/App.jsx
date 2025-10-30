import { Routes,Route } from "react-router-dom"
import { Button } from "./components/ui/button"
import AuthPage from "./pages/auth"



function App() {

  return (
   <div>
    <Routes>
      <Route path="/auth" element={<AuthPage/>}/>
    </Routes>
   </div>
  )
}

export default App
