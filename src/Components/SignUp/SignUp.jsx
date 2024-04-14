import React from "react";
import Logo from '/public/logo.png'
//Dùng <Link to="..." /> thay cho thẻ <a href="..."></a> 
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
        <div class="flex items-center justify-center min-h-screen pt-24">
            <div class="container">
              <div class="flex justify-center">
                <div class="w-full max-w-md">
                  <div class="text-center mb-4">
                    <a class="flex justify-center mb-12 " href="/">
                      <img src={Logo} class="h-7"/>
                    </a>
                    <h4 class="text-xl font-medium pb-1">Register</h4>
                    <p class=" text-sm pb-3 text-[#7a7f9a]">Get your Chatvia account now.</p>
                  </div>
                  <div class="p-8 bg-white rounded">
                    <form class="">
                      <div class="mb-4">
                        <label class="block text-gray-500 bg-white text-sm font-semibold" for="email">Email</label>
                        <div class="flex items-center bg-[#f8f9fa] rounded-lg mb-3 mt-2">
                          <span class="flex items-center justify-center text-[#7a7f9a] px-4 text-xs">
                            <i class="fa-regular fa-envelope"></i>
                          </span>
                          <input id="email" name="email" type="text" placeholder="Enter Email"
                            class="w-full bg-white border rounded-r-lg px-3 py-2 focus:outline-none" />
                        </div>
                      </div>
                      <div class="mb-4">
                        <label class="block text-gray-500 text-sm font-semibold mb-2" for="username">Username</label>
                        <div class="flex items-center bg-[#f8f9fa] rounded-lg mb-3">
                          <span class="flex items-center justify-center text-[#7a7f9a] px-4 text-xs">
                          <i class="fa-regular fa-user"></i>
                          </span>
                          <input id="username" name="username" type="text" placeholder="Enter Username"
                            class="w-full border rounded-r-lg px-3 py-2 focus:outline-none" />
                        </div>
                      </div>
                      <div class="mb-4">
                        <label class="block text-gray-500 text-sm font-semibold mb-2" for="password">Password</label>
                        <div class="flex items-center bg-[#f8f9fa] mb-3">
                          <span class="flex items-center justify-center rounded-l-lg text-[#7a7f9a] px-4 text-xs">
                            <i class="fa-solid fa-lock"></i>
                          </span>
                          <input id="password" name="password" type="password" placeholder="Enter Password"
                            class="w-full border rounded-r-lg px-3 py-2 focus:outline-none" />
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <button type="submit"
                          class="w-full bg-[#7269ef] hover:bg-[#5b54bf] transition-all text-white font-medium py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline">
                          Register
                        </button>
                      </div>
                      <div class="mt-4 text-center">
                        <p class="text-[#7a7f9a] text-sm">By registering you agree to the Chatvia <a class="text-blue-500" href="/register">Terms of Use</a></p>
                      </div>
                    </form>
                  </div>
                  <div class="mt-5 text-center mb-5">
                    <p>Already have an account? <Link class="font-medium text-[#7269ef] hover:text-[#5b54bf]" to="/">Sign in</Link></p>
                    <p>© 2024 Chatvia. Crafted with <i class="mdi mdi-heart text-red-500"></i> by Themesbrand</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};
export default SignUp;
