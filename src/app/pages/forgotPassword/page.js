
"use client"
import React, { useState } from "react";
import InputField from "src/components/Inputs/InputField";

export default function ForgetPassword() {

  return (
    <div className="bg-slate-100 w-screen h-screen flex justify-center items-center ">
      <div className="bg-white w-11/12 md:w-6/12 lg:w-4/12  py-10 px-4">
        <img src="/logo-icon.png" alt="logo" className="w-40 mb-5 mx-auto" />
        <InputField
          label={"Email"}
          type="email"
          placeholder="Email"
        //   value={state.email}
        //   required
        //   onChange={(e) => handleChange("email", e)}
        //   error={errors.email}
          widthFull
        />
        {/* {message && (
          <div className="w-full font-medium flex justify-center">
            {message}
          </div>
        )} */}

        <div className={`text-center mt-6 px-4`}>
          <div
            className="bg-slate-800 cursor-pointer text-white active:bg-slate-600 text-sm font-bold uppercase px-6 h-12 flex items-center justify-center rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            // onClick={sendEmail}
          >
            Reset Password
          </div>
        </div>
      </div>
    </div>
  );
}
