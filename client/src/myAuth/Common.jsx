import React, { useContext } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AuthContext } from "@/context/auth-context";
import RequiredForm from "./RequiredForm";
import { myInitialSignUpFormData, mySignUpFormControls } from "@/config";

const Common = () => {
  const { 
      // signIn,
      signUp,
      // handleEmailSignUp,
      // handleUsernameSignUp,
      // handlePasswordSignUp,
      // handleEmailSignIn,
      // handlePasswordSignIn,
      toggle,
      handleToggle,
      handleSignUp,
      handleSignIn,
      // setSignIn,
      setSignUp

    } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8">
      <div className="flex">
        <button
          disabled={toggle}
          onClick={handleToggle}
          className="p-2 border-blue-200"
        >
          Sign In
        </button>
        <button disabled={!toggle} onClick={handleToggle}>
          Sign Up
        </button>
      </div>
      <div className="border-4 p-3 rounded-lg w-[400px]">
        <form onSubmit={toggle ? handleSignIn : handleSignUp}>
           {/* {toggle ? 
              <SignIn emailSignIn={signIn.email}
                       passwordSignIn={signIn.password}
                        emailSignInEntry={handleEmailSignIn} 
                        passwordSignInEntry={handlePasswordSignIn} 
                        /> 
              : <SignUp usernameSignUp={signUp.username}
                       emailSignUp={signUp.email} 
                       passwordSignUp={signUp.password}  
                       usernameSignUpEntry={handleUsernameSignUp} 
                       emailSignUpEntry={handleEmailSignUp}
                        passwordSignUpEntry={handlePasswordSignUp} 
                        />
          }  */}
          
          <RequiredForm mySignUpFormControls={mySignUpFormControls}
                              signUp={signUp}
                              setSignUp={setSignUp}/>

          <div className="flex justify-center">
            <button className="mt-5 mb-5 border-2 p-2 w-[250px] rounded-[5px]
             bg-black text-white hover:bg-gray-400 ">
              {toggle ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Common;
