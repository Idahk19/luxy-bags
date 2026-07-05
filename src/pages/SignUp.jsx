import React from 'react'

import { useState } from "react"

function SignUp() {
    const[ formData, setFormData] = useState({
        fullName: "",
        email: "",
        password:"",
        confirmPassword:"",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
     
    };
     const handleSubmit = (e) => {
    e.preventDefault();

    // Check passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const existingUser = users.find(
      (user) => user.email === formData.email
    );

    if (existingUser) {
      alert("Email already exists!");
      return;
    }

    // Create new user
    const newUser = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    // Save user
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");

    // Clear form
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    };

    
  return (
    <div>
      <section className="min-h-screen bg-cover bg-center" 
      style={{backgroundImage:"url('/images/about.jpg')"}}>
        <div className="bg-black/70 min-h-screen mx-auto grid grid-cols-1
          gap-10 items-center px-6" >

        <div className="items-center flex flex-col ">
          <h1 className="text-4xl font-bold text-pink-400 mb-4">
              Sign Up here
            </h1>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div>
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                 onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                 onChange={handleChange}
                className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
              />
            </div>
            <div>
              <label className="block text-white mb-2"> Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                 onChange={handleChange}
                className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Sign Up
            </button>

        </form>
        </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp
