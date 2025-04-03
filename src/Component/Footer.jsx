import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Contact</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-yellow-400" />
                <a href="mailto:himanshukumar917096@gmail.com" className="hover:text-yellow-400">
                  himanshukumar917096@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-yellow-400" />
                <span>+91 9170962319</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-yellow-400" />
                <span>+91 6393499120</span>
              </li>
            </ul>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Projects</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">E-commerce Website</a></li>
              <li><a href="#" className="hover:text-yellow-400">Ecomerecipe Website</a></li>
              <li><a href="#" className="hover:text-yellow-400">Blog Website</a></li>
              <li><a href="#" className="hover:text-yellow-400">MERN Admin Panel</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/19JMQJBAo4/" className="text-white hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/himanshumaurya2323/" className="text-white hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/himanshu-maurya-b74441309" className="text-white hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/Himanshu23231" className="text-white hover:text-gray-400">
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Useful Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/About" className="hover:text-yellow-400">About Me</a></li>
              <li><a href="/Projects" className="hover:text-yellow-400">My Projects</a></li>
              <li><a href="/Contact" className="hover:text-yellow-400">Contact Me</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright & Additional Info */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © 2025 Himanshu Maurya. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
