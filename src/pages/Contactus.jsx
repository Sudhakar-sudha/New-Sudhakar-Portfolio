import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Globe,
} from "lucide-react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Replace with your actual EmailJS credentials if needed
  const SERVICE_ID = "service_xxxxxx";
  const TEMPLATE_ID = "template_xxxxxx";
  const PUBLIC_KEY = "your_public_key";


    const socialLinks = [
      {
        icon: Github,
        href: "https://github.com/Sudhakar-sudha",
        label: "GitHub - Sudhakar",
        color: "hover:text-gray-400 hover:shadow-[0_0_10px_#6b7280]",
      },
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/sudhakar89/",
        label: "LinkedIn - Sudhakar",
        color: "hover:text-blue-500 hover:shadow-[0_0_10px_#3b82f6]",
      },
      {
        icon: MessageCircle,
        href: "https://wa.me/7092238804",
        label: "WhatsApp - Sudhakar",
        color: "hover:text-green-500 hover:shadow-[0_0_10px_#22c55e]",
      },
      {
        icon: Mail,
        href: "mailto:sudhakarsudha8672@gmail.com",
        label: "Email Sudhakar",
        color: "hover:text-red-400 hover:shadow-[0_0_10px_#ef4444]",
      },
      {
        icon: Instagram,
        href: "https://www.instagram.com/frds_call_me_sudha",
        label: "Instagram - Sudhakar",
        color: "hover:text-pink-500 hover:shadow-[0_0_10px_#ec4899]",
      },
      {
        icon: Globe,
        href: "https://sudhakar-portfolio.vercel.app",
        label: "Portfolio - Sudhakar",
        color: "hover:text-cyan-400 hover:shadow-[0_0_10px_#22d3ee]",
      },
    ];
  

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setSent(true);
  //         setLoading(false);
  //         e.target.reset();
  //         setTimeout(() => setSent(false), 4000);
  //       },
  //       (error) => {
  //         console.error(error.text);
  //         setLoading(false);
  //         alert("Failed to send message. Please try again.");
  //       }
  //     );
  // };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_#3b82f6]">
          Get In Touch
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
          Feel free to reach out for collaborations, college projects, or startup ideas —
          I’m always open to help and guide you.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {/* Left: Intro Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="text-3xl font-bold text-blue-400 mb-4">
              Let's Build Something Great 🚀
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I’m part of a local startup dedicated to helping{" "}
              <span className="text-blue-400 font-semibold">college students</span> and{" "}
              <span className="text-blue-400 font-semibold">aspiring developers</span>
              get their <span className="text-cyan-400 font-semibold">live or final-year projects</span>
              done with professional quality.
              <br />
              <br />
              Whether you need a <span className="text-blue-400 font-semibold">React</span>,{" "}
              <span className="text-blue-400 font-semibold">Node.js</span>, or{" "}
              <span className="text-blue-400 font-semibold">Full Stack</span> project,
              I’m here to guide, develop, and deliver.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="break-all">sudhakarsudha8672@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 70922 38804</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Sivakasi, Virudhunagar, Tamil Nadu, India</span>
              </div>
            </div>

            <p className="mt-8 text-gray-400">
              Need a project right now?{" "}
              <span className="text-cyan-400 font-semibold">
                Contact me immediately — always available to help you out!
              </span>
            </p>
          </div>

          {/* Social Links - Responsive */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.12, rotate: 12 }}
                    whileTap={{ scale: 0.98, rotate: 0 }}
                    className={`flex items-center justify-center ${social.color} transition-all duration-300`}
                    // ensure minimum accessible touch size and nice rounded background
                    style={{ minWidth: 44, minHeight: 44 }}
                  >
                    <span className="p-2 rounded-full bg-white/10 border border-white/20
                                                flex items-center justify-center
                                                min-w-[44px] min-h-[44px]">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-current" />
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          ref={form}
          // onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send a Message
          </h3>

          <div className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-2 text-sm">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="youremail@example.com"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your message..."
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-600 transition"
            >
              <Send className="w-5 h-5" />
              {loading ? "Sending..." : sent ? "Message Sent ✅" : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
