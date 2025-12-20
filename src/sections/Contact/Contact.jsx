import React, { useState } from "react";
import { motion } from "framer-motion";

import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/common/Button";
import { socials } from "../../data/socials";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Demo submit (frontend only)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Message sent successfully! (Demo)");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let’s build something amazing together"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hoverEffect={false}>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg glass border border-dark-border focus:border-neon-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg glass border border-dark-border focus:border-neon-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg glass border border-dark-border focus:border-neon-blue focus:outline-none resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* RIGHT: INFO + SOCIALS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card hoverEffect={false}>
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg glass-light">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="text-gray-400">Email</div>
                    <div className="font-medium">hello@devportfolio.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg glass-light">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <div className="text-gray-400">Location</div>
                    <div className="font-medium">Remote · Global</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg glass-light">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <div className="text-gray-400">Availability</div>
                    <div className="font-medium">Open to new projects</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card hoverEffect={false}>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl glass hover:border-neon-blue border border-transparent transition-all"
                  >
                    <span className="text-2xl mb-2">{social.icon}</span>
                    <span className="text-sm text-gray-400">{social.name}</span>
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
