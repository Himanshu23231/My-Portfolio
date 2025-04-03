const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-screen flex flex-col justify-center items-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">About Me 👋</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I'm <span className="text-blue-400 font-semibold">Himanshu</span>, a passionate <span className="text-green-400">MERN Stack Developer</span> with experience in building scalable and user-friendly web applications. I love working with technologies like <span className="text-pink-400">MongoDB, Express.js, React, and Node.js</span>.
        </p>
        
        <h2 className="text-2xl font-semibold text-blue-300 mt-6">Skills & Technologies 🚀</h2>
        <div className="flex flex-wrap justify-center mt-4 gap-4">
          <span className="px-4 py-2 bg-blue-500 rounded-lg">React.js</span>
          <span className="px-4 py-2 bg-green-500 rounded-lg">Node.js</span>
          <span className="px-4 py-2 bg-yellow-500 rounded-lg">MongoDB</span>
          <span className="px-4 py-2 bg-purple-500 rounded-lg">Express.js</span>
          <span className="px-4 py-2 bg-red-500 rounded-lg">Tailwind CSS</span>
        </div>

        <h2 className="text-2xl font-semibold text-blue-300 mt-6">My Journey 📖</h2>
        <p className="text-lg text-gray-300 leading-relaxed mt-2">
          Started my journey as a developer in **Hanumant Technology**, where I built projects like **E-commerce Website, Ecomerecipe, and Blog Website**. Now, I'm working on building high-quality web solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
