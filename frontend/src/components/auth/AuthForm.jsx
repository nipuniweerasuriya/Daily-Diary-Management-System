import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="flex flex-col md:flex-row gap-10">
      {/* Login Card */}
      {isLogin && (
        <div className="bg-white p-10 rounded-2xl shadow-md w-80">
          <h2 className="text-3xl font-bold text-[#AF6FBF] mb-6">Login</h2>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full mb-4 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full mb-2 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
          />
          <p className="text-sm text-gray-400 text-right mb-4 cursor-pointer">
            Forgot Your Password?
          </p>
          <button className="w-full py-2 bg-[#AF6FBF] text-white font-semibold rounded-md hover:opacity-90">
            Login
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="flex justify-center">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google Login"
              className="w-8 h-8 cursor-pointer"
            />
          </div>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <span
              onClick={toggleForm}
              className="text-black font-medium cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      )}

      {/* Sign Up Card */}
      {!isLogin && (
        <div className="bg-white p-10 rounded-2xl shadow-md w-80">
          <h2 className="text-3xl font-bold text-[#AF6FBF] mb-6">Sign Up</h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full mb-4 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full mb-4 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full mb-4 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Your Password"
            className="w-full mb-4 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
          />
          <button className="w-full py-2 bg-[#AF6FBF] text-white font-semibold rounded-md hover:opacity-90">
            Sign Up
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="flex justify-center">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google Sign Up"
              className="w-8 h-8 cursor-pointer"
            />
          </div>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <span
              onClick={toggleForm}
              className="text-black font-medium cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
