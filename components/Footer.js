import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/prit1310",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://in.linkedin.com/in/prit-senjaliya-0a416228a",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      href: "mailto:pritsenjaliya1162@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 safe-area-inset">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl">
                💻
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text">
                Prit Senjaliya
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 max-w-md mx-auto sm:mx-0">
              Full Stack Developer passionate about creating beautiful,
              functional web applications that make a difference in people's
              lives.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg text-lg sm:text-xl`}
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Get In Touch
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <span className="font-medium">Email:</span>
                <br />
                pritsenjaliya1162@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <span className="font-medium">Phone:</span>
                <br />
                +91 99982 32047
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <span className="font-medium">Location:</span>
                <br />
                Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex justify-center items-center text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base space-x-2">
            <span>© {new Date().getFullYear()} Prit Senjaliya.</span>
            <span>All rights reserved.</span>
            <span>Built with passion and care.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
