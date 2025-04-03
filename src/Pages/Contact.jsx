import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-6 flex justify-center items-center min-h-screen">
      <div className="bg-gray-800 p-10 rounded-lg shadow-2xl w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">Let's Connect! 📞</h2>

        <ul className="space-y-6">
          <ContactItem
            icon={<FaPhone size={25} className="text-green-400" />}
            text="+91 9170962319"
            link="tel:+919170962319"
          />
          <ContactItem
            icon={<FaEnvelope size={25} className="text-red-400" />}
            text="himanshukumar917096@gmail.com"
            link="mailto:himanshukumar917096@gmail.com"
          />
          <ContactItem
            icon={<FaGithub size={25} className="text-white" />}
            text="GitHub"
            link="https://github.com/Himanshu23231"
          />
          <ContactItem
            icon={<FaLinkedin size={25} className="text-blue-400" />}
            text="LinkedIn"
            link="https://www.linkedin.com/in/himanshu-maurya-b74441309"
          />
          <ContactItem
            icon={<FaFacebook size={25} className="text-blue-500" />}
            text="Facebook"
            link="https://www.facebook.com/share/19JMQJBAo4/"
          />
          <ContactItem
            icon={<FaInstagram size={25} className="text-pink-400" />}
            text="Instagram"
            link="https://instagram.com/himanshumaurya2323"
          />
        </ul>
      </div>
    </div>
  );
};

// Contact Item Component
const ContactItem = ({ icon, text, link }) => {
  return (
    <li className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg shadow-md max-w-lg mx-auto transition-transform duration-200 hover:translate-x-2 hover:bg-gray-600">
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 w-full">
        {icon}
        <span className="text-lg">{text}</span>
      </a>
    </li>
  );
};

export default Contact;
