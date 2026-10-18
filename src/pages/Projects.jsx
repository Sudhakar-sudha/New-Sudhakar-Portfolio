import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Globe } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const projects = [
  {
    id: 1,
    title: "Evol Chat Application",
    description:
      "Evol is a simple and fast real-time chat application that allows users to send and receive messages instantly. It is designed to be easy to use, reliable, and responsive, providing a smooth communication experience for everyday use.",
    tech: ["ReactNative", "Node.js", "Express.js", "MongoDB"],
    demo: "https://drive.google.com/file/d/1lVSQK-qDDyMszlKrTplHw27Rupk0NtYO/view?usp=sharing",
    image: "https://res.cloudinary.com/dlfan4caj/image/upload/v1767320579/college_projects/chef_1767320547689.jpg",
  },
  {
    id: 2,
    title: "LesShop",
    description:
      "LesShop is a user-friendly e-commerce platform that connects local startups with customers to boost visibility and sales. It enables easy product browsing, secure ordering, and fast delivery through a dedicated seller and delivery system.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    demo: "https://lesshop.vercel.app/",
    image: "https://res.cloudinary.com/dlfan4caj/image/upload/v1767203759/localestartupe_cabyfj.png",
  },
  {
    id: 3,
    title: "Pickbazar Website",
    description:
      "Pickbazar is a React e-commerce Landing Page that allows users to browse products, place orders, and manage their shopping experience seamlessly.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "https://project-tptk.onrender.com",
    image: "https://res.cloudinary.com/dlfan4caj/image/upload/v1767204235/pickbazar_kdyhfw.png",
  },
  {
    id: 4,
    title: "V Print Tech",
    description:
      "V Print Tech is a printing offset website developed using the MERN stack in collaboration with Satheeshbabu.",
    tech: ["Reactjs", "Nodejs", "Expressjs", "Mongodb"],
    demo: "https://vprinttech.netlify.app/",
    image: "https://res.cloudinary.com/dlfan4caj/image/upload/v1767203772/vprinttech_f7nggk.png",
  },
  {
    id: 5,
    title: "Tancet Quiz",
    description:
      "The TANCET Quiz Website is an interactive platform designed to help students prepare for the Tamil Nadu Common Entrance Test with mock tests, instant results, and anti-cheating features. It offers a seamless, mobile-friendly experience with real-time assessments and performance analytics.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    demo: "https://tancetquiz.vercel.app",
    image: "https://res.cloudinary.com/dlfan4caj/image/upload/v1767203758/tancet_ynnaia.png",
  },
  {
    id: 6,
    title: "Expenses Tracker",
    description:
      "An expense tracker website that uses JavaScript to manage and store user data locally in the browser's local storage for easy access and tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://sudhakar-portfolio.vercel.app/expensetracker",
    image: "https://res.cloudinary.com/dlfan4caj/image/upload/v1792326727/expensetracker_ykujz1.png",
  },
  {
    id: 7,
    title: "Crackers Website",
    description:
      "A Crackers Website built using HTML, CSS, and JavaScript that allows users to browse, select, and purchase various firecrackers online with an interactive and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://sudhakar-portfolio.vercel.app/jsscrackers",
    image: "https://res.cloudinary.com/dlfan4caj/image/upload/v1767203773/jsscrackers_vsocnr.png",
  },
  {
    id: 8,
    title: "TNEB Bill Calculator",
    description:
      "A TNEB Bill Calculator Website built using HTML and CSS that helps users calculate their Tamil Nadu Electricity Board (TNEB) bill based on consumption and tariff rates.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://sudhakar-portfolio.vercel.app/tneb",
    image: "https://res.cloudinary.com/dlfan4caj/image/upload/v1792326727/tneb_eenbxk.png",
  },
  {
    id: 9,
    title: "Simple Calculator",
    description:
      "A Calculator Website built using HTML and CSS that provides a user-friendly interface for performing basic arithmetic operations and simple calculations.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://sudhakar-portfolio.vercel.app/calculator",
    image: "https://res.cloudinary.com/dlfan4caj/image/upload/v1792326726/calculator_bj2mbd.png",
  },
];

/* ------------------------------------------------------------------ */
/* Light background (white base + soft blue glow blobs)                */
/* ------------------------------------------------------------------ */

const BLOBS = [
  { pos: "-right-24 top-[0%] h-60 w-60 sm:h-96 sm:w-96", color: "bg-lightblue-300/40", depth: -90, drift: 28, time: 10 },
  { pos: "-left-24 top-[18%] h-56 w-56 sm:h-80 sm:w-80", color: "bg-lightblue-200/60", depth: 120, drift: -34, time: 11 },
  { pos: "right-[12%] top-[42%] h-52 w-52 sm:h-80 sm:w-80", color: "bg-darkblue-500/20", depth: -140, drift: 36, time: 12 },
  { pos: "-left-20 top-[62%] h-60 w-60 sm:h-96 sm:w-96", color: "bg-lightblue-300/50", depth: 90, drift: -26, time: 9.5 },
  { pos: "-right-16 top-[82%] h-56 w-56 sm:h-80 sm:w-80", color: "bg-lightblue-200/60", depth: -110, drift: 30, time: 13 },
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

const Projects = () => {
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
      id="projects"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative isolate overflow-hidden px-6 pb-20 pt-10 text-gray-900 md:px-12"
    >
      <div className="relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h2 className="inline-block text-4xl font-extrabold text-darkblue-800 sm:text-5xl">
            Projects
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-3 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-darkblue-500 to-lightblue-400"
          />
          <p className="mt-4 text-lg text-gray-600">
            Things I have built for real users, clients, and college work.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.15 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md shadow-gray-200/70 transition-[border-color,box-shadow] duration-300 hover:border-lightblue-400 hover:shadow-xl hover:shadow-lightblue-500/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkblue-800/30 via-transparent to-transparent" />
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-darkblue-800">{project.title}</h3>
                  <p className="mb-4 text-justify text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="rounded-full border border-lightblue-200 bg-lightblue-50 px-3 py-1 text-xs font-medium text-darkblue-600"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Live button */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-darkblue-800 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-darkblue-500 hover:shadow-lg hover:shadow-darkblue-500/30"
                >
                  <Globe
                    size={18}
                    className="transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-110"
                  />
                  <span>View Live</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;