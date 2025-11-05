import React from "react";

const SignUp = ({emailSignUp,usernameSignUp,passwordSignUp,passwordSignUpEntry,emailSignUpEntry,usernameSignUpEntry}) => {
  return (
    <div className="flex flex-col p-4 gap-4 rounded-[10px]">
      <label htmlFor="" className="flex flex-col gap-1">
        Username:
        <input
          type="text"
          value={usernameSignUp}
          onChange={usernameSignUpEntry}
          placeholder="Input your username here"
          className="w-[350px] px-5 py-2 placeholder:opacity-50 outline-1 rounded-[10px]"
        />
      </label>

      <label htmlFor="" className="flex flex-col gap-1">
        Email:
        <input
          type="email"
          value={emailSignUp}
          onChange={emailSignUpEntry}
          placeholder="Input your email here"
          className="w-[350px] px-5 py-2 placeholder:opacity-50 outline-1 rounded-[10px]"
        />
      </label>

      <label htmlFor="" className="flex flex-col gap-1">
        Password:
        <input
          type="password"
          value={passwordSignUp}
          onChange={passwordSignUpEntry}
          placeholder="Input your password here"
          className="w-[350px] px-5 py-2 placeholder:opacity-50 outline-1 rounded-[10px]"
        />
      </label>
    </div>
  );
};

export default SignUp;
