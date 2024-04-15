import React from "react";
import Logo from "/public/logo.png"
export function Header({ heading, label }) {
  return (
    <div className="mb-6 text-center">
      <a className="auth-logo mb-12 flex justify-center" href="/">
        <img
          src={Logo}
          alt={Logo}
          height="30"
          className="logo logo-dark h-8"
        />
      </a>
      <h4 className="mb-2 text-xl font-semibold">{heading}</h4>
      <p className="font-normal text-slate-500 mb-6">{label}</p>
    </div>
  );
}
