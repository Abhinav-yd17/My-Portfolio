import React from "react";
import { socials } from "../../data/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-dark-border py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display mb-2 text-white">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-400">
              Always open to new opportunities and collaborations
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 hover:text-neon-blue transition-all transform hover:scale-110"
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-dark-border text-center text-gray-500">
          <p>
            © {currentYear} DevPortfolio. Built with React & Vite.
          </p>
          <p className="mt-2 text-sm">
            Crafted with ❤️ for the developer community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
