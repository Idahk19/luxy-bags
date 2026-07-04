import React from "react";

function AboutUs() {
  return (
    <div>
      <section
        className=" w-full backdrop-blur bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url('/images/about.jpg')` }}
      >
        <div className="bg-black/70 w-full min-h-screen flex flex-col items-center gap-6">
          <div className=" mt-4 max-w-2xl bg-black/50 backdrop-blur-sm p-8 rounded-2xl mb-4 shadow-xl">
             <h2 className="text-xl font-semibold text-pink-600 mb-2">
              Who Are We 
            </h2>
            <p className="text-white text-lg leading-8">
              Welcome to {""}
               <span className="font-semibold text-pink-300">Luxy Bags</span>,
              where fashion meets elegance. We believe that every handbag is
              more than just an accessory, it's a statement of confidence,
              style, and personality.
            </p>
          </div>
          <div className="max-w-2xl bg-black/50 backdrop-blur-sm p-8 rounded-2xl mb-4 shadow-xl">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">
              What We Offer
            </h2>
            <p className="text-white text-lg leading-8">
              Our collection is carefully selected to offer trendy, high-quality
              bags for every occasion. Whether you're heading to work, attending
              a special event, or looking for an everyday companion, Luxy Bags
              has something perfect for you.
            </p>
          </div>
          <div className="max-w-2xl bg-black/50 backdrop-blur-sm p-8 rounded-2xl mb-4 shadow-xl">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">
              Our Mission
            </h2>
            <p className="text-white">
              To empower every customer with stylish, high-quality handbags that
              inspire confidence.
            </p>
          </div>
          <div className="max-w-2xl bg-black/50 backdrop-blur-sm p-8 rounded-2xl mb-4 shadow-xl">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">
              Our Vision
            </h2>
            <p className="text-white">
              To become a trusted destination for fashionable and affordable
              handbags across Kenya and beyond.
            </p>
          </div>
          <div className="max-w-2xl bg-black/50 backdrop-blur-sm p-8 rounded-2xl mb-4 shadow-xl">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">
              Our Values
            </h2>

            <p className="text-gray-200 leading-8">
              At Luxy Bags, we are guided by quality, elegance, integrity, and
              customer satisfaction. Every handbag in our collection is
              carefully selected to reflect timeless style, exceptional
              craftsmanship, and value for our customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
