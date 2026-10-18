import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const certificates = [
  {
    title: "Diploma in Computer Application",
    issuer: "Mannivel Institute",
    date: "2022",
    image: "./DCA.jpg",
    description:
      "Learned basic C and C++ programming along with Microsoft Word, Excel, and PowerPoint.",
    link: "https://drive.google.com/file/d/1UmEue6JSl7zBooJiwNnUA4k2tkRiWgkw/view",
  },
  {
    title: "Diploma in Computer Hardware and Servicing",
    issuer: "Ayya Nadar Janaki Ammal College, Sivakasi",
    date: "2023",
    image: "./ANJAC.jpg",
    description:
      "Gained practical knowledge in computer hardware and basic software servicing.",
    link: "https://drive.google.com/file/d/1_ODQjOKBf1ODgLzRgK5T-g_N0UcSVCoy/view",
  },
  {
    title: "Diploma in Desktop Publishing",
    issuer: "Easy Computers, Sivakasi",
    date: "2023",
    image: "./DTP.jpg",
    description:
      "Learned Coral Draw and Adobe Photoshop for professional graphic design projects.",
    link: "https://drive.google.com/file/d/12S8eTWqCqVX_rS9WJdxJBLvn67c8ZmRr/view",
  },
  {
    title: "Python",
    issuer: "Ayya Nadar Janaki Ammal College",
    date: "2023",
    image: "./python.jpg",
    description:
      "Explored Python basics, including libraries like NumPy and Matplotlib.",
    link: "https://drive.google.com/file/d/18Ztt7jbIgvprVPQjxrRRHldV8NDS2UN6/view?usp=sharing",
  },
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "NPTEL",
    date: "2024",
    image: "./DSA.jpg",
    description:
      "Learned core data structures and algorithms and applied them with Java.",
    link: "https://drive.google.com/file/d/1jfzDARPlOOqKqvzyRsgZaF03qMAl2VEA/view?usp=sharing",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2025",
    image: "./CloudComputing.jpg",
    description:
      "Learned core cloud computing concepts such as virtualization, cloud service models, scalability, and secure deployment of cloud-based applications.",
    link: "https://drive.google.com/file/d/1-neLF14ZfKIBPBr9TbyyKlPvH8X7ws_3/view?usp=sharing",
  },
];

/* ------------------------------------------------------------------ */
/* Light background (white base + soft blue glow blobs)                */
/* ------------------------------------------------------------------ */

const BLOBS = [
  { pos: "-left-24 top-[0%] h-60 w-60 sm:h-96 sm:w-96", color: "bg-lightblue-300/40", depth: -90, drift: 28, time: 10 },
  { pos: "-right-24 top-[22%] h-56 w-56 sm:h-80 sm:w-80", color: "bg-lightblue-200/60", depth: 120, drift: -34, time: 11 },
  { pos: "left-[14%] top-[50%] h-52 w-52 sm:h-80 sm:w-80", color: "bg-darkblue-500/20", depth: -140, drift: 36, time: 12 },
  { pos: "-right-20 top-[75%] h-60 w-60 sm:h-96 sm:w-96", color: "bg-lightblue-300/50", depth: 90, drift: -26, time: 9.5 },
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

const Certificates = () => {
  const reduce = useReducedMotion();

  // pointer parallax for blobs
  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 40, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 40, damping: 18 });

  // pointer spotlight (px inside section)
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

  return (
    <section
      id="certificates"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative isolate overflow-hidden px-4 pb-20 pt-10 text-gray-900 sm:px-6"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="inline-block text-4xl font-extrabold text-darkblue-800 sm:text-5xl">
            Certificates &amp; Achievements
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-3 h-1 w-24 origin-center rounded-full bg-gradient-to-r from-darkblue-500 to-lightblue-400"
          />
          <p className="mt-4 text-lg text-gray-600">
            Courses and diplomas I have completed to build my skills.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.15 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md shadow-gray-200/70 transition-[border-color,box-shadow] duration-300 hover:border-lightblue-400 hover:shadow-xl hover:shadow-lightblue-500/20"
            >
              {/* Certificate Image (opens the certificate) */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${cert.title} certificate`}
                className="relative block h-52 overflow-hidden border-b border-gray-100 bg-gray-100"
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                  className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-lightblue-100 bg-white/90 shadow-sm backdrop-blur-sm">
                  <Award className="h-5 w-5 text-darkblue-500" />
                </span>
              </a>

              {/* Certificate Content */}
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-lightblue-200 bg-lightblue-50 px-3 py-1 text-xs font-medium text-darkblue-600">
                  <Calendar className="h-3.5 w-3.5" />
                  {cert.date}
                </span>

                <h3 className="mb-1 text-lg font-bold leading-snug text-darkblue-800">
                  {cert.title}
                </h3>
                <p className="mb-3 text-sm font-semibold text-darkblue-500">{cert.issuer}</p>

                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  {cert.description}
                </p>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduce ? undefined : { scale: 1.03 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  className="group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-darkblue-800 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-darkblue-500 hover:shadow-lg hover:shadow-darkblue-500/30"
                >
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  <span>View Certificate</span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;