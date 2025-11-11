import { Routes,Route } from "react-router-dom"
import AuthPage from "./pages/auth"
import Common from "./myAuth/Common"
import RouteGuard from "./components/route-guard"
import { useContext } from "react"
import { AuthContext } from "./context/auth-context"
import InstructorDashboardpage from "./pages/instructor"
import StudentViewCommonLayout from "./components/student-view/commin-layout"
import StudentHomePage from "./pages/student/home"
import NotFound from "./pages/not-Found"
import AddNewCoursePage from "./pages/instructor/add-new-page"



function App() {

  const {auth} = useContext(AuthContext)

  return (
    <div>
      <Routes>
        <Route
          path="/auth"
          element={
            <RouteGuard
              element={<AuthPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />

        <Route
          path="/instructor"
          element={
            <RouteGuard
              element={<InstructorDashboardpage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />

         <Route
          path="/instructor/create-new-course"
          element={
            <RouteGuard
              element={<AddNewCoursePage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />

        <Route
          path="/"
          element={
            <RouteGuard
              element={<StudentViewCommonLayout />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        >
{/*these are the children component of the student view common laylout */}
          <Route path="" element={<StudentHomePage />} />
          <Route path="home" element={<StudentHomePage />} />
         
        </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App


 