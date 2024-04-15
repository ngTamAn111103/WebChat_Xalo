import React from "react";

import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

// Khung đăng nhập, đăng ký, quên mật khẩu
export function Login() {
  return (
    <>
      <div className="account-page my-12 pt-12">
        <div className="container m-auto px-1.5">
          <div className="row flex justify-center">
            <div className="col-md-8 col-lg-6 col-xl-5 px-3 ">
              {/* Header */}
              <Header
                heading="Sign in"
                label="Sign in to continue to Chatvia."
              />
              {/* Body */}
              <Body 
              />
              {/* Footer */}
              <Footer label=" Sign up now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
