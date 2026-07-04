import React from 'react'

function ContactUs(){
  return (
    <div>
      <section className="min-h-screen bg-cover bg-center" 
      style={{backgroundImage:"url('/images/about.jpg')"}}>
        <div className="bg-black/70 min-h-screen flex mx-auto grid grid-cols-1
         md:grid-cols-2 gap-10 items-center px-6" >
        <div className='mt-4'>
              <h1 className="text-4xl font-bold text-pink-400 mb-4">
              Get in Touch
            </h1>

            <div className="space-y-4 text-white">
              <p>
                <span className="font-semibold text-pink-300">Address:</span>{" "}
                Nairobi, Kenya
              </p>

              <p>
                <span className="font-semibold text-pink-300">Email:</span>{" "}
                luxybags@gmail.com
              </p>

              <p>
                <span className="font-semibold text-pink-300"> Phone:</span>{" "}
                +254 757 732 215
              </p>
            </div>
        </div>
        <div className="">
          <h1 className="text-4xl font-bold text-pink-400 mb-4">
              Submit your issues
            </h1>
        <form>
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
              <label className="block text-white mb-2">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>

        </form>
        </div>
        </div>
      </section>
      
    </div>
  )
}

export default ContactUs
