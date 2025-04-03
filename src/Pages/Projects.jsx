const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with authentication and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
   link: "https://ecommerce-complete-himanshus-projects-1d427dad.vercel.app/Login",  
  },
  {
    title: "Ecomerecipe Website",
    description: "A recipe-sharing website with user authentication and interactive UI.",
    tech: ["React", "Express.js", "MongoDB"],
    link: "https://github.com/Himanshu23231/ecomerecipe",
  },
  {
    title: "Blog Website",
    description: "A simple blog platform where users can write, edit, and share articles.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    link: "https://github.com/Himanshu23231/blog",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-screen flex flex-col justify-center items-center px-6 py-12">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">My Projects 🚀</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-blue-300">{project.title}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="flex gap-2 mt-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-600 px-3 py-1 rounded-full text-sm">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
