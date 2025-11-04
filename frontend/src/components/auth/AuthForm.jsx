import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // ✅ For navigation

  const toggleForm = () => setIsLogin(!isLogin);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? "http://localhost:4000/auth/login"
        : "http://localhost:4000/auth/register";

      // Check password confirmation for signup
      if (!isLogin && formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

      const res = await axios.post(url, payload);

      if (res.data.token) {
        // store token and set default Authorization header for axios
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.token}`;
        alert("✅ Success!");
        navigate("/HomePage"); // ✅ Redirect to HomePage
      } else {
        alert(res.data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error: " + (err.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center min-h-screen bg-gray-50">
      {/* Login Card */}
      {isLogin && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-md w-80"
        >
          <h2 className="text-3xl font-bold text-[#AF6FBF] mb-6">Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-2 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
            required
          />
          <p className="text-sm text-gray-400 text-right mb-4 cursor-pointer">
            Forgot Your Password?
          </p>
          <button
            type="submit"
            className="w-full py-2 bg-[#AF6FBF] text-white font-semibold rounded-md hover:opacity-90 cursor-pointer"
          >
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
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") toggleForm();
              }}
            >
              Register
            </span>
          </p>
        </form>
      )}

      {/* Sign Up Card */}
      {!isLogin && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-md w-80"
        >
          <h2 className="text-3xl font-bold text-[#AF6FBF] mb-6">Sign Up</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Your Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 bg-[#FAE6FF] rounded-md outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#AF6FBF] text-white font-semibold rounded-md hover:opacity-90 cursor-pointer"
          >
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
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") toggleForm();
              }}
            >
              Login
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
