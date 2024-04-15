import React from "react";

export function ForgotPassword({ href="#" }) {
  return (
    <div className="float-end">
      <a className="text-muted text-sm" href={href}>
        Forgot password?
      </a>
    </div>
  );
}
