import React from "react";
import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";
import { socials } from "../../data/socials";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">

      {/* HUGE BACKGROUND TEXT */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[160px] font-black text-white/15 blur-[1px] tracking-wider select-none pointer-events-none">
        CONTACT
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let’s build something that stands out."
          align="center"
        />

        {/* SPLIT LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mt-20">

          {/* LEFT SIDE — PERSONALITY */}
          <div className="space-y-10">
            <h2 className="text-5xl font-extrabold leading-tight">
              Let’s build something that
              <span className="block text-neon-blue">
                doesn’t look like everyone else.
              </span>
            </h2>

            <p className="text-gray-400 text-lg">
              I design & develop high-performance, visually rich digital
              experiences that feel premium and modern.
            </p>

            <div className="border-l-4 border-neon-blue pl-6 text-gray-300 italic">
              Available for freelance, full-time & ambitious ideas.
            </div>
          </div>

          {/* RIGHT SIDE — CONTACT DATA CARDS */}
          <div className="space-y-8">

            {/* Divider Label */}
            <div className="flex items-center gap-4">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-sm text-gray-500 tracking-widest">
                DIRECT CONTACT
              </span>
              <div className="h-px bg-white/10 flex-1" />
            </div>

            <Card hoverEffect={false}>
              <div className="space-y-6">

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <div className="text-xs uppercase text-gray-500 tracking-widest">
                    Email
                  </div>
                  <div className="text-xl font-semibold mt-2">
                    abhinavyadav.ay17@gmail.com
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <div className="text-xs uppercase text-gray-500 tracking-widest">
                    Location
                  </div>
                  <div className="text-xl font-semibold mt-2">
                    Greater Noida, India
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <div className="text-xs uppercase text-gray-500 tracking-widest">
                    Availability
                  </div>
                  <div className="text-xl font-semibold mt-2">
                    Open to new projects
                  </div>
                </div>

              </div>
            </Card>

            {/* SOCIALS */}
            <Card hoverEffect={false}>
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square rounded-xl bg-white/5 border border-white/10 
                    flex items-center justify-center text-xl font-semibold 
                    hover:border-neon-blue transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
