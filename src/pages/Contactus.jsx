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
} from "lucide-react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Your actual EmailJS credentials (replace with your values)
  const SERVICE_ID = "service_xxxxxx"; // replace with your EmailJS service ID
  const TEMPLATE_ID = "template_xxxxxx"; // replace with your EmailJS template ID
  const PUBLIC_KEY = "your_public_key"; // replace with your EmailJS public key

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
//       .then(
//         (result) => {
//           console.log(result.text);
//           setSent(true);
//           setLoading(false);
//           e.target.reset();
//           setTimeout(() => setSent(false), 4000);
//         },
//         (error) => {
//           console.error(error.text);
//           setLoading(false);
//           alert("Failed to send message. Please try again.");
//         }
//       );
//   };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sudhakar89/",
      color: "hover:text-blue-500",
    },
    {
      icon: Github,
      href: "https://github.com/Sudhakar-sudha",
      color: "hover:text-gray-400",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/frds_call_me_sudha",
      color: "hover:text-pink-500",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/7092238804",
      color: "hover:text-green-500",
    },
    {
      icon: Mail,
      href: "mailto:sudhakarsudha8672@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden"
    >
      {/* Animated Background Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_#3b82f6]">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
          Feel free to reach out for collaborations, project inquiries, or just a friendly chat.
        </p>
      </motion.div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400 w-6 h-6" />
              <a
                href="mailto:sudhakarsudha8672@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                sudhakarsudha8672@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-green-400 w-6 h-6" />
              <a
                href="tel:+917092238804"
                className="text-gray-300 hover:text-green-400 transition"
              >
                +91 70922 38804
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-red-400 w-6 h-6" />
              <p className="text-gray-300">Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-5 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                className={`p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 ${social.color} transition-all duration-300`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
        //   onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

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
