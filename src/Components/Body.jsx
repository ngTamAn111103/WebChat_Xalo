import React from "react";

import { Input } from "./Input";
import { RememberMe } from "./RememberMe";
import { Button } from "./Button";
export function Body() {
  return (
    <>
      <div className="card mb-6 w-[460px] bg-white ">
        <div className="card-body p-6">
          <div className="p-4">
            <form className="">
              <Input
                textLabel="Username"
                htmlFor="username"
                placeholder="Nhap uername"
                icon="fa-regular fa-user"
              />
              <Input
                textLabel="Password"
                htmlFor="password"
                placeholder="Nhap password"
                isForgotPassword
                icon="fa-solid fa-lock"
                inputType="password"
              />

              {/* Remember me */}
              <RememberMe />
              <Button label="Sign in" type="Submit" />
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}