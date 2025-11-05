import React from "react";

const SignIn = ({ emailSignIn, passwordSignIn, emailSignInEntry, passwordSignInEntry }) => {
  return (
    <div className="flex flex-col p-4 gap-4 rounded-[10px]">
     <p>Already have an account? Sign In here</p>

      <label htmlFor="" className="flex flex-col gap-1">
        Email:
        <input
          type="email"
          value={emailSignIn}
          onChange={emailSignInEntry}
          placeholder="Input your email here"
          className="w-[350px] px-5 py-2 placeholder:opacity-50 outline-1 rounded-[10px]"
        />
      </label>

      <label htmlFor="" className="flex flex-col gap-1">
        Password:
        <input
          type="password"
          value={passwordSignIn}
          onChange={passwordSignInEntry}
          placeholder="Input your password here"
          className="w-[350px] px-5 py-2 placeholder:opacity-50 outline-1 rounded-[10px]"
        />
      </label>
    </div>
  );
};

export default SignIn;
