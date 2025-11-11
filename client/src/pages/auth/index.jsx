import CommonForm from "@/components/common-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { GraduationCap } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser, 
    handleLoginUser
  } = useContext(AuthContext);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }


  function checkIfSignUpFormIsValid() {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== ""
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-[50px] flex items-center border-bottom ">
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">LMS LEARNING </span>
        </Link>
      </header>

      <div className="flex items-center justify-center min-h-[calc(100vh-50px)]">
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleTabChange}
          className="w-full max-w-md "
        >
          <TabsList >
            <TabsTrigger value="signin" className="border-2 w-2/4 rounded-2xl">
              Sign In{" "}
            </TabsTrigger>
            <TabsTrigger value="signup" className="border-2 w-2/4 rounded-2xl">
              Sign Up{" "}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm      
                  formControls={signInFormControls}
                  buttonText={"Sign In"}
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  isButtonDisabled= {checkIfSignInFormIsValid()}
                  handleSubmit={handleLoginUser}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Create a new account</CardTitle>
                <CardDescription>
                  Enter your username,email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signUpFormControls}
                  buttonText={"Sign Up"}
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  isButtonDisabled= {!checkIfSignUpFormIsValid()}
                  handleSubmit={handleRegisterUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
