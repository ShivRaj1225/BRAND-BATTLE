import React, { useState } from 'react';
import { motion } from 'framer-motion';
import About from '../Home/Landing/About/About';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#192654] p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl"
      >
        {/* Left Side - Image and Text */}
        <div className="md:w-1/2 w-full relative p-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#192654] to-[#2e3c76]">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Login Visual"
            className="rounded-xl object-cover h-64 md:h-full w-full"
          />
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
          <div className="absolute p-6 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-sm md:text-base">Battle the Brands with Confidence</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full bg-[#1d2c5b] p-8 flex flex-col justify-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Log in to your account</h2>
          <p className="text-sm mb-4">
            New here? <a href="/signin" className="text-cyan-400 underline">Create an account</a>
          </p>

          <form className="space-y-6">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full bg-white/10 p-3 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 text-white text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/70 peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="peer w-full bg-white/10 p-3 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-3 text-white text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/70 peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400"
              >
                Password
              </label>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="accent-cyan-400" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="/forgot-password" className="text-cyan-400 hover:underline">Forgot Password?</a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-cyan-400 text-[#192654] font-semibold py-3 rounded-md transition"
            >
              Log in
            </motion.button>
          </form>

          {/* Or login with */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-white/20"></div>
            <span className="mx-4 text-white/60">OR</span>
            <div className="flex-grow border-t border-white/20"></div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 py-3 rounded-md hover:bg-white/20">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlFw2O6C2HV9hXCsyL3wwr728jtryj7sZ5A&s" alt="Google" className="h-5" />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 py-3 rounded-md hover:bg-white/20">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bWij6lUht3IWKiHeZJN-uN6iiKkM1d4eNA&s" alt="Apple" className="h-5" />
              Apple
            </button>
           
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
