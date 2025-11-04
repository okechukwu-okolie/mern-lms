import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });

  async function handleRegisterUser(event){
    event.preventDefault() 
    const data = await registerService(signUpFormData)  
    console.log(data)
  }


   async function handleLoginUser(event){
    event.preventDefault() 
    const data = await loginService(signInFormData)  
   
    if(data.success){
      sessionStorage.setItem('accessToken',JSON.stringify(data.data.accessToken))
      setAuth({
        authenticate:true,
        user: data.data.user
      })
    }else{
      setAuth({
        authenticate:false,
        user: null
      })
    }
  }
// to check auth user
async function checkAuthUser(){
    // call check auth service
    const data = await checkAuthService();

    if(data.success){
      setAuth({
        authenticate:true,
        user: data.data.user
      })
    }else{ 
      setAuth({
        authenticate:false,
        user: null
      })
    }
}

useEffect(() => {
  checkAuthUser();
},[])
  


  //  async function handleRegisterUser(event){
  //   event.preventDefault() 
  //   const data = await registerService(signUpFormData)  
  //   console.log(data)
  // }




  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}





// import { initialSignInFormData, initialSignUpFormData } from "@/config";
// import { registerService } from "@/services";
// import { createContext, useState } from "react";

// // 1. Define the initial context value structure for clarity (optional, but good practice)
// export const AuthContext = createContext({
//   signInFormData: initialSignInFormData,
//   setSignInFormData: () => {},
//   signUpFormData: initialSignUpFormData,
//   setSignUpFormData: () => {},
//   handleRegisterUser: () => {},
//   loading: false,
//   error: null,
// });

// export default function AuthProvider({ children }) {
//   const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
//   const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  
//   // 2. Add state for managing loading and potential errors during the API call
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function handleRegisterUser(event) {
//     // Prevent default form submission behavior (crucial for forms)
//     if (event) event.preventDefault(); 
    
//     // Reset error state and set loading state before the API call
//     setError(null);
//     setLoading(true);

//     try {
//       // 3. Await the asynchronous service call
//       const data = await registerService(signUpFormData);

//       // Check for success/failure based on the API response structure
//       // (Assuming a simple { success: true, message: '...' } structure)
//       if (data && data.success) {
//         console.log("Registration successful:", data.message);
//         // Optional: Reset form data after successful registration
//         // setSignUpFormData(initialSignUpFormData); 
//       } else {
//         // Handle API-specific errors (e.g., validation failed)
//         const errorMessage = data?.message || "Registration failed. Please try again.";
//         setError(errorMessage);
//         console.error("Registration failed:", errorMessage);
//       }
//     } catch (apiError) {
//       // 4. Handle network or other unexpected errors
//       const errorMessage = apiError.message || "A network error occurred.";
//       setError(errorMessage);
//       console.error("API call error:", apiError);
//     } finally {
//       // 5. Always set loading to false when the process is complete
//       setLoading(false);
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         signInFormData,
//         setSignInFormData,
//         signUpFormData,
//         setSignUpFormData,
//         handleRegisterUser,
//         // 6. Provide the new states to consumers
//         loading,
//         error,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }