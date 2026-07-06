import React from "react";
import SignUp from "./SignUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password,
    );
    if (!user) {
      alert("Invalid email or password.");
      return;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));

    navigate("/");
  };
  return (
    <div>
      <section
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about.jpg')" }}
      >
        <div
          className="bg-black/70 min-h-screen mx-auto grid grid-cols-1
          gap-10 items-center px-6"
        >
          <div className="items-center flex flex-col ">
            <h1 className="text-4xl font-bold text-pink-400 mb-4">Login</h1>
            <form className="w-full max-w-md" onSubmit={handleLogin}>
              <div>
                <label className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                  className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Log In
              </button>

              
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
