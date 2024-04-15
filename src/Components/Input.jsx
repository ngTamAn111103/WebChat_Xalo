import React from "react";

import { ForgotPassword } from "./ForgotPassword";

export function Input({
  textLabel,
  htmlFor,
  icon,
  placeholder,
  inputType = "text",
  isForgotPassword = false,
}) {
  return (
    <div className="mb-4">
      {isForgotPassword && <ForgotPassword />}
      <label className="mb-2 block " htmlFor={htmlFor}>
        {textLabel}
      </label>

      <div className="bg-soft-light mb-4 block">
        <div className="flex items-center">
        <span
          className="border border-solid border-[#e6ebf5] bg-gray-100 px-4 py-2"
          id="basic-addon3"
        >
          <i className={icon}></i>
        </span>
        <input
          id={htmlFor}
          name={htmlFor}
          placeholder={placeholder}
          type={inputType}
          className="w-full border border-solid border-[#e6ebf5] px-4 py-2 text-gray-600 focus:outline-none"
          aria-invalid="false"
        />
        </div>
        
      </div>
    </div>
  );
}
