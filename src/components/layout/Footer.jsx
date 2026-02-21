import React from "react";
import { socials } from "../../data/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-24 bg-black text-white border-t border-white/10">

      {/* 🔥 RADIAL NEON EXPLOSION */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)]"></div>

      {/* 🌌 CYBER GRID */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* ⚡ SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_95%,rgba(255,255,255,0.05)_100%)] bg-[size:100%_4px] animate-pulse"></div>

      {/* 💀 HUGE GLITCH TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[140px] md:text-[220px] font-black text-white/5 tracking-widest animate-pulse">
          CYBER
        </h1>
      </div>

      {/* 🌈 TOP GLOW BORDER */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADLINE */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Let’s Break The Internet 🚀
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building futuristic digital experiences that feel like they came from 2035.
          </p>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-center gap-12 mb-16">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full border border-cyan-400 opacity-0 group-hover:opacity-100 animate-spin-slow"></div>

              <span className="relative text-4xl text-gray-400 group-hover:text-cyan-400 transition duration-300 group-hover:scale-150 transform">
                {social.icon}
              </span>
            </a>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-10"></div>

        {/* BOTTOM */}
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-lg">
            © {currentYear} DevPortfolio
          </p>
          <p className="text-sm text-gray-500">
            React ⚛️ • Vite ⚡ • Tailwind 💨 • Pure Madness 🔥
          </p>

          <p className="text-xs text-gray-600 tracking-widest animate-pulse">
            BUILD. INNOVATE. DOMINATE.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
