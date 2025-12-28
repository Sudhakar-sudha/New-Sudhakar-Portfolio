import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Send, Phone
} from "lucide-react";
import axios from "axios";
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await axios.post("https://localestartup-backend.onrender.com/api/sudhakar/contact", data);
      // console.log(res);
      if (res.data.success) {
        setSent(true);
        e.target.reset();
        setTimeout(() => setSent(false), 3000);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Try again!");
    } finally {
      setLoading(false);
    }
  };

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
        {/* Left: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=" p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
        >
          <motion.img
            src="./Questions.png"
            alt="Ask Sudhakar"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl  shadow-lg hover:scale-105 transition-transform duration-300"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-center mt-6 text-sm sm:text-base"
          >
            Any Queries or Doubts? Ask me immediately!
            <br />

            <span className="flex items-center justify-center gap-2 mt-3 text-blue-400 font-semibold text-lg">
              <Phone className="w-5 h-5" />
              70922&nbsp;38804
            </span>

            <br />
            <span className="text-gray-400 text-sm">
              Always available for live or college projects.
            </span>
          </motion.p>

        </motion.div>


        {/* Right: Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendMessage}
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
