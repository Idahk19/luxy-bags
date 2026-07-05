import React from 'react'

function SignUp() {
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
        <form className="w-full max-w-md">
          <div>
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Password</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
              />
            </div>
            <div>
              <label className="block text-white mb-2"> Repeat Password</label>
              <input
                type="text"
                placeholder="Subject"
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
