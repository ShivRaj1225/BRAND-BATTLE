import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#192654] p-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl"
      >
        {/* Left Section - Image and Text */}
        <div className="md:w-1/2 w-full relative p-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#192654] to-[#2e3c76]">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
            alt="Brand Battle Visual" 
            className="rounded-xl object-cover h-64 md:h-full w-full"
          />
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
          <div className="absolute p-6 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Brand Battle</h2>
            <p className="text-sm md:text-base">Choose the Best Brands for Your Needs</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 w-full bg-[#1d2c5b] p-8 flex flex-col justify-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Create an account</h2>
          <p className="text-sm mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400 underline">
              Log in
            </Link>
          </p>

          <form className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="bg-white/10 p-3 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-white/10 p-3 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-white/10 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {/* ✅ New Confirm Password Field */}
            <input
              type="password"
              placeholder="Confirm your password"
              className="bg-white/10 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="accent-cyan-400"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the Terms & Conditions
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-cyan-400 text-[#192654] font-semibold py-3 rounded-md transition"
            >
              Create account
            </motion.button>
          </form>

          {/* Or sign up with */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-white/20"></div>
            <span className="mx-4 text-white/60">OR</span>
            <div className="flex-grow border-t border-white/20"></div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 py-3 rounded-md hover:bg-white/20">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlFw2O6C2HV9hXCsyL3wwr728jtryj7sZ5A&s"
                alt="Google"
                className="h-5"
              />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 py-3 rounded-md hover:bg-white/20">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bWij6lUht3IWKiHeZJN-uN6iiKkM1d4eNA&s"
                alt="Apple"
                className="h-5"
              />
              Apple
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SignIn;
