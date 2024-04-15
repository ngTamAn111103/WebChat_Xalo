import React from "react";

export function RememberMe() {
  return (
    <div className="form-check mb-6">
      <input
        id="remember-check"
        type="checkbox"
        className="form-check-input form-check-input rounded border-[0.25px]"
      />
      <label htmlFor="remember-check" className="form-check-label form-label ml-2">
        Remember me
      </label>
    </div>
  );
}
