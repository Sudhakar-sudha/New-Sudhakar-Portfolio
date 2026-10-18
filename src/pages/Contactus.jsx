import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Send, Phone } from "lucide-react";
import axios from "axios";

/* ------------------------------------------------------------------ */
/* Background: white base + soft round colour glows                    */
/* ------------------------------------------------------------------ */

const BLOBS = [
  { pos: "-left-20 top-[0%] h-56 w-56 sm:h-80 sm:w-80", color: "bg-lightblue-300/40", depth: 90, drift: 26, time: 9 },
  { pos: "-right-20 top-[10%] h-52 w-52 sm:h-72 sm:w-72", color: "bg-darkblue-500/20", depth: -120, drift: -30, time: 11 },
  { pos: "left-[8%] bottom-[6%] h-52 w-52 sm:h-80 sm:w-80", color: "bg-lightblue-400/30", depth: 110, drift: 32, time: 12 },
  { pos: "-right-16 bottom-[0%] h-56 w-56 sm:h-96 sm:w-96", color: "bg-lightblue-300/35", depth: -90, drift: -26, time: 10 },
  { pos: "left-[45%] top-[40%] h-40 w-40 sm:h-64 sm:w-64", color: "bg-lightblue-200/40", depth: 140, drift: 28, time: 13 },
];

function Blob({ pos, color, depth, drift, time, mx, my, reduce }) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);

  return (
    <motion.div
      aria-hidden="true"
      style={reduce ? undefined : { x, y }}
      className={`pointer-events-none absolute ${pos}`}
    >
      <motion.div
        className={`h-full w-full rounded-full blur-3xl ${color}`}
        animate={reduce ? undefined : { y: [0, drift, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: time, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const inputClass =
  "w-full rounded-xl border border-lightblue-100 bg-lightblue-50/60 px-4 py-3 text-darkblue-900 placeholder:text-darkblue-800/40 " +
  "transition focus:border-lightblue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lightblue-400/40";

const Contact = () => {
  const form = useRef(null);
  const reduce = useReducedMotion();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // pointer parallax
  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 40, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 40, damping: 18 });

  const spotXRaw = useMotionValue(300);
  const spotYRaw = useMotionValue(300);
  const spotX = useSpring(spotXRaw, { stiffness: 90, damping: 22 });
  const spotY = useSpring(spotYRaw, { stiffness: 90, damping: 22 });

  const handleMove = (e) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mxRaw.set(e.clientX / window.innerWidth - 0.5);
    myRaw.set(e.clientY / window.innerHeight - 0.5);
    spotXRaw.set(e.clientX - rect.left);
    spotYRaw.set(e.clientY - rect.top);
  };

  const handleLeave = () => {
    mxRaw.set(0);
    myRaw.set(0);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await axios.post(
        "https://localestartup-backend.onrender.com/api/sudhakar/contact",
        data
      );
      if (res.data.success) {
        setSent(true);
        form.current.reset();
        setTimeout(() => setSent(false), 3000);
      } else {
        setError("Could not send your message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative isolate overflow-hidden py-10 text-darkblue-900"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-lightblue-500">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight text-darkblue-900 sm:text-5xl">Get in touch</h2>
          <p className="mt-4 text-base leading-relaxed text-darkblue-800/70 sm:text-lg">
            Feel free to reach out for collaborations, college projects, or startup ideas. I’m always open to help
            and guide you.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 -z-10" />
              <img
                src="./Questions.png"
                alt="Ask Sudhakar"
                loading="lazy"
                className="h-60 w-60 rounded-2xl object-cover transition-transform duration-300 hover:scale-105 sm:h-72 sm:w-72"
              />
            </div>

            <p className="mt-8 text-base text-darkblue-800/80">Any queries or doubts? Ask me right away.</p>

            <a
              href="tel:+917092238804"
              className="mt-4 inline-flex items-center gap-3 rounded-full border border-lightblue-200 bg-white px-6 py-3 text-lg font-semibold text-darkblue-700
                         shadow-md shadow-darkblue-900/5 transition duration-300 hover:-translate-y-0.5 hover:border-lightblue-400 hover:shadow-lg"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lightblue-100 text-lightblue-500">
                <Phone className="h-4 w-4" />
              </span>
              70922&nbsp;38804
            </a>

            <p className="mt-4 text-sm text-darkblue-800/60">Always available for live or college projects.</p>
          </motion.div>

          {/* Right: form */}
          <motion.form
            ref={form}
            onSubmit={sendMessage}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="rounded-3xl border border-lightblue-100 bg-white/80 p-6 shadow-xl shadow-darkblue-900/10 backdrop-blur-md sm:p-8"
          >
            <h3 className="mb-6 text-2xl font-semibold text-darkblue-900">Send a message</h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-darkblue-800/80">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-darkblue-800/80">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-darkblue-800/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your idea or project…"
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-darkblue-600 to-lightblue-500 py-3 font-semibold text-white
                           shadow-lg shadow-darkblue-500/30 transition hover:from-darkblue-700 hover:to-lightblue-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-5 w-5" />
                {loading ? "Sending…" : sent ? "Message sent ✅" : "Send message"}
              </motion.button>

              <p
                role="status"
                aria-live="polite"
                className={`min-h-[1.25rem] text-center text-sm ${error ? "text-gray-900" : "text-darkblue-600"}`}
              >
                {error || (sent ? "Thanks! I’ll get back to you soon." : "")}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;