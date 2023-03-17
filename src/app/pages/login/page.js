
"use client"
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/Inputs/InputField";

export default function Login({}) {
  const router = useRouter();

  return (
    <>
      <div className="bg-slate-100 w-screen h-screen flex justify-center items-center ">
        <div className="bg-white w-11/12 md:w-6/12 lg:w-4/12  py-10 px-4">
          <img src="/logo-icon.png" alt="logo" className="w-40 mb-5 mx-auto" />

          <InputField
            label={"Email"}
            type="email"
            placeholder="Email"
            // value={state.email}
            required
            // onChange={(e) =>
            //   handleChange("email", e, { type: "email", required: true })
            // }
            // error={errors.email}
            widthFull
          />
          <InputField
            label={"Password"}
            type="password"
            placeholder="Password"
            // value={state.password}
            required
            // onChange={(e) =>
            //   handleChange("password", e, { type: "required", required: true })
            // }
            // error={errors.password}
            widthFull
          />

          <div
            className="px-4 text-gray-900 font-medium cursor-pointer hover:text-gray-700"
            onClick={() => {
              router.push("/pages/forgotPassword");
            }}
          >
            Forget Password?
          </div>

          <div className="text-center mt-6 px-4">
            <div
              className="bg-slate-800 cursor-pointer text-white active:bg-slate-600 text-sm font-bold uppercase px-6 h-12 flex items-center justify-center rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              onClick={() => {
                if (!loader) {
                  if (validate()) {
                    _login();
                  }
                }
              }}
            >
            Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
