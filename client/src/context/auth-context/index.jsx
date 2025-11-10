import { Skeleton } from "@/components/ui/skeleton";
import {
  authState,
  initialSignInFormData,
  initialSignUpFormData,
} from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState(authState);
  const [loading, setLoading] = useState(true);

  //this function will handle user registration
  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerService(signUpFormData);
    console.log(data);
  }

  //this function will handle user login
  async function handleLoginUser(event) {
    event.preventDefault();
    const data = await loginService(signInFormData);

    if (data.success) {
      sessionStorage.setItem(
        "accessToken",
        JSON.stringify(data.data.accessToken)
      );
      setAuth({
        authenticate: true,
        user: data.data.user,
      });
    } else {
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }

  // const handlebacktoSignIn = () => {
  //   <Link to="/auth" />;

  //   setChange(!change);
  // };

  //check auth user on app load
 async function checkAuthUser() {
    try {
      const data = await checkAuthService();
      if (data.success) {
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
        setLoading(false);
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      if (!error?.response?.data?.success) {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    }
  }


   
  //call check auth user on app load
  useEffect(() => {
    checkAuthUser();
  }, []);

  // console.log("Auth Context Auth State:", auth);

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        setAuth
      }}
    >
      {loading ? <h1 className='flex justify-center items-center min-h-screen text-5xl font-extrabold'>Loading.......</h1> : children}
    </AuthContext.Provider>
  );
}

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 


// import { initialSignInFormData, initialSignUpFormData, myInitialSignUpFormData } from "@/config";
// import { createContext, useState } from "react";

//  export const AuthContext = createContext(null);
// export default function AuthProvider({children}){

//   const [signIn, setSignIn] = useState(initialSignInFormData)
//   const [signUp, setSignUp] = useState(myInitialSignUpFormData)
//   const [toggle, setToggle] = useState(false)

//   const handleToggle = ()=>{
//     setToggle(!toggle)
//   }
//  const handleEmailSignUp=(e)=>{
//     // e.preventDefault()
//     setSignUp({
//       ...signUp,
//       email: e.target.value
//     })
// }
//  const handleUsernameSignUp=(e)=>{
//     // e.preventDefault()
//     setSignUp({
//       ...signUp,
//       username: e.target.value
//     })
// }
//  const handlePasswordSignUp=(e)=>{
//     // e.preventDefault()
//     setSignUp({
//       ...signUp,
//       password: e.target.value
//     })
// }

//  const handleEmailSignIn=(e)=>{
//     // e.preventDefault()
//     setSignIn({
//       ...signIn,
//       email: e.target.value
//     })
// }

// const handlePasswordSignIn=(e)=>{
//     // e.preventDefault()
//     setSignIn({
//       ...signIn,
//       password: e.target.value
//     })
// }
// const handleSignUp=async(e)=>{
//     e.preventDefault()
//     console.log("Sign Up data:",signUp)
// }

// const handleSignIn=async(e)=>{
//     e.preventDefault()
//     console.log("Sign In data:",signIn)
// }

//   return(<AuthContext.Provider
//     value={{
//       signIn,
//       setSignIn,
//       signUp,
//       setSignUp,
//       toggle,
//       setToggle,
//       handleToggle,
//       handleEmailSignUp,
//       handleUsernameSignUp,
//       handlePasswordSignUp,
//       handleEmailSignIn,
//       handlePasswordSignIn,
//       handleSignUp,
//       handleSignIn,

//     }}>
//     {children}
//   </AuthContext.Provider>)
// }
