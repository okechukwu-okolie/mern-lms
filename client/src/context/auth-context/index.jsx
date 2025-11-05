// import { authState, initialSignInFormData, initialSignUpFormData } from "@/config";
// import { checkAuthService, loginService, registerService } from "@/services";
// import { createContext, useEffect, useState } from "react";




// export const AuthContext = createContext(null);

// export default function AuthProvider({ children }) {
//   const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
//   const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
//   const [auth, setAuth] = useState(authState);

//   async function handleRegisterUser(event){
//     event.preventDefault() 
//     const data = await registerService(signUpFormData)  
//     console.log(data)
//   }


//    async function handleLoginUser(event){
//     event.preventDefault() 
//     const data = await loginService(signInFormData)  
   
//     if(data.success){
//       sessionStorage.setItem('accessToken',JSON.stringify(data.data.accessToken))
//       setAuth({
//         authenticate:true,
//         user: data.data.user
//       })
//     }else{
//       setAuth({
//         authenticate:false,
//         user: null
//       })
//     }
//   }

  
// // to check auth user
// async function checkAuthUser(){
//     // call check auth service
//     const data = await checkAuthService();

//     if(data.success){
//       setAuth({
//         authenticate:true,
//         user: data.data.user
//       })
//     }else{ 
//       setAuth({
//         authenticate:false,
//         user: null
//       })
//     }
// }

// useEffect(() => {
//   checkAuthUser();
// },[])




//   return (
//     <AuthContext.Provider
//       value={{
//         signInFormData,
//         setSignInFormData,
//         signUpFormData,
//         setSignUpFormData,
//         handleRegisterUser,
//         handleLoginUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }



import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { createContext, useState } from "react";


export const AuthContext = createContext(null);
export default function AuthProvider({children}){

  const [signIn, setSignIn] = useState(initialSignInFormData)
  const [signUp, setSignUp] = useState(initialSignUpFormData)
  const [toggle, setToggle] = useState(false)

  const handleToggle = ()=>{
    setToggle(!toggle)
  }
 const handleEmailSignUp=(e)=>{
    // e.preventDefault() 
    setSignUp({
      ...signUp,
      email: e.target.value
    })
}
 const handleUsernameSignUp=(e)=>{
    // e.preventDefault() 
    setSignUp({
      ...signUp,
      username: e.target.value
    })
}
 const handlePasswordSignUp=(e)=>{
    // e.preventDefault() 
    setSignUp({
      ...signUp,
      password: e.target.value
    })
}

 const handleEmailSignIn=(e)=>{
    // e.preventDefault() 
    setSignIn({
      ...signIn,
      email: e.target.value
    })
}

const handlePasswordSignIn=(e)=>{
    // e.preventDefault() 
    setSignIn({
      ...signIn,
      password: e.target.value
    })
}
const handleSignUp=(e)=>{
    e.preventDefault() 
    console.log("Sign Up data:",signUp)
}

const handleSignIn=(e)=>{
    e.preventDefault() 
    console.log("Sign In data:",signIn)
}



  return(<AuthContext.Provider 
    value={{
      signIn,
      setSignIn,
      signUp,
      setSignUp,
      toggle,
      setToggle,
      handleToggle,
      handleEmailSignUp,
      handleUsernameSignUp,
      handlePasswordSignUp,
      handleEmailSignIn,
      handlePasswordSignIn,
      handleSignUp,
      handleSignIn
    }}>
    {children}
  </AuthContext.Provider>)
}

