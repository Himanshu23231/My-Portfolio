import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6">
      
      {/* Name & Profile Image Section (Flex Row) */}
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-black text-white px-6">

      <h1 className="text-4xl font-bold text-yellow-400">Welcome to My Portfolio</h1>
    </div>
      <div className="flex items-center space-x-4">
        {/* Left: Text Content */}
        <div>
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-yellow-300">Himanshu 👋</span>
          </h1>
          <h2 className="text-xl font-semibold text-green-300">
            MERN Stack Developer
          </h2>
        </div>

        {/* Right: Small Profile Image */}
        <motion.img
          src="/f23cc29b-0cd8-417c-a7e3-953161e9020c (1).jpg"  // Ensure the image is inside the public folder
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Description & Button */}
      <p className="mt-4 text-lg text-center max-w-xl">
        I build responsive and scalable web applications using MongoDB, Express.js, React, and Node.js.
      </p>

      <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-400 hover:text-white transition">
        View Projects
      </button>

    </div>
  );
};

export default Home;
