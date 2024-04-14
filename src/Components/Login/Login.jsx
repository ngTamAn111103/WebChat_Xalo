import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "/public/logo.png";
const Login = () => {
  const temp = () => {
   console.log("Tạm cho hết lỗi");
  };
  return (
    <div id="root">
      <div className="account-pages my-12 pt-12">
        <div className="container m-auto px-1.5">
          <div className="flex justify-center row">
            <div className="col-md-8 col-lg-6 col-xl-5 px-3">
              <div className="text-center mb-6">
                <a className="auth-logo mb-12 flex justify-center" href="/">
                  <img
                    src={Logo}
                    alt=""
                    height="30"
                    className="logo logo-dark h-8"
                  />
                </a>
                <h4 className="font-semibold text-xl mb-2 text-black">
                  Sign in
                </h4>
                <p className="text-muted mb-6">
                  Sign in to continue to Chatvia.
                </p>
              </div>
              <div className="card bg-white mb-6">
                <div className="p-6 card-body">
                  <div className="p-4">
                    <form className="">
                      <div className="mb-4">
                        <label className="mb-2 block">Username</label>
                        <div className="mb-4 bg-soft-light block">
                          <span
                            className="px-4 py-2 bg-gray-100 border border-[#e6ebf5] border-solid text-muted"
                            id="basic-addon3"
                          >
                            <i className="fa-regular fa-user"></i>
                          </span>
                          <input
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            type="text"
                            className="border border-[#e6ebf5] border-solid py-2 w-[300px] px-4 text-gray-600 focus:outline-none"
                            aria-invalid="false"
                            value="admin@themesbrand.com"
                            onChange={temp}
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="float-end">
                          <a
                            className="text-muted text-sm"
                            href="/forget-password"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <label className="block mb-2">Password</label>
                        <div className="mb-4 block">
                          <span className="px-4 py-2 bg-gray-100 border border-[#e6ebf5] border-solid text-muted">
                            <i className="fa-solid fa-lock"></i>
                          </span>
                          <input
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                            className="border border-[#e6ebf5] border-solid py-2 w-[300px] px-4 text-gray-600 focus:outline-none "
                            aria-invalid="false"
                            value="123456"
                            onChange={temp}
                          />
                        </div>
                      </div>
                      <div className="form-check mb-6">
                        <input
                          id="remember-check"
                          type="checkbox"
                          className="border-[0.25px] rounded form-check-input form-check-input"
                        />
                        <label
                          htmlFor="remember-check"
                          className="form-check-label form-label ml-2"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="waves-effect waves-light btn btn-primary d-block w-100
                          text-white
                          w-96 h-10
                          rounded-lg
                          bg-[--bs-primary]"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-10 text-center">
                <p className="mb-4">
                  Don't have an account ?
                  <Link className="font-medium text-primary" to="/signup">
                    Sign up
                  </Link>
                </p>
                <p>
                  © 2024 Chatvia. Crafted with
                  <i className="fa-solid fa-heart"></i> by Themesbrand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
