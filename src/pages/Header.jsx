import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle, Mail, Download } from 'lucide-react';
import CharacterCanvas from '../components/CharacterCanvas';

const SOCIAL_LINKS = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sudhakar89/', color: 'hover:text-darkblue-500' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Sudhakar-sudha', color: 'hover:text-black' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/frds_call_me_sudha', color: 'hover:text-lightblue-500' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/917092238804', color: 'hover:text-darkblue-700' },
    { icon: Mail, label: 'Email', href: 'mailto:sudhakarsudha8672@gmail.com', color: 'hover:text-lightblue-400' },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7 },
});

const ROLES = [
    'Full Stack Developer',
    'React / React Native',
    'Next.js',
    'Flask / FastAPI',
    'Laravel / MySQL',
    'Data Analyst',
];

const STACK = ['React', 'Next.js', 'React Native', 'Node', 'Python', 'Laravel'];

const NAME_LETTERS = 'Sudhakar'.split('');

function Typewriter({ words, speed = 70, pause = 1600 }) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index];
        let delay = deleting ? speed / 2 : speed;

        if (!deleting && text === word) delay = pause;

        const t = setTimeout(() => {
            if (!deleting && text === word) {
                setDeleting(true);
            } else if (deleting && text === '') {
                setDeleting(false);
                setIndex((i) => (i + 1) % words.length);
            } else {
                setText(word.slice(0, text.length + (deleting ? -1 : 1)));
            }
        }, delay);

        return () => clearTimeout(t);
    }, [text, deleting, index, words, speed, pause]);

    return (
        <span>
            {text}
            <span className="caret" />
        </span>
    );
}

// Navbar is 64px tall -> 80px keeps the head clearly below it
const NAVBAR_OFFSET = 15;

const Header = ({ onCharacterLoaded }) => (
    <section
        id="home"
        className="relative flex flex-col overflow-hidden bg-gray-100 xl:min-h-screen xl:flex-row xl:items-center"
    >
        {/* Character: top block on mobile, full-section background on desktop */}
        <div className="relative h-[68svh] min-h-[400px] w-full xl:absolute xl:inset-0 xl:h-auto xl:min-h-0">
            <CharacterCanvas
                desktopFocus={0.68}
                topOffset={NAVBAR_OFFSET}
                onLoaded={onCharacterLoaded}
            />
            {/* soft fade into the text block (mobile only) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-100 to-transparent xl:hidden" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-2 sm:px-6 lg:px-8 xl:pb-10 xl:pt-24">
            <div className="mx-auto max-w-xl text-center xl:mx-0 xl:max-w-[44%] xl:text-left">

                {/* Status pill */}
                <motion.a
                    {...fadeUp(0.1)}
                    href="https://localestartup.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-gray-900/90 py-2 pl-3 pr-4 font-mono text-[11px]
             font-medium uppercase tracking-[0.2em] text-gray-100 shadow-lg ring-1 ring-white/10 backdrop-blur
             transition-transform duration-300 hover:-translate-y-0.5"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lightblue-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-lightblue-400" />
                    </span>
                    Open to freelance
                    <span className="text-gray-500">/</span>
                    <span className="text-lightblue-300">2026</span>
                </motion.a>

                {/* Name: letter by letter + hand-drawn underline */}
                <motion.div {...fadeUp(0.15)}>
                    <p className="mb-1 font-mono text-sm tracking-[0.3em] text-gray-500">
                        <span className="text-darkblue-500">&gt;</span> hello_world, I'm
                    </p>

                    <h1
                        aria-label="Sudhakar"
                        className="relative inline-block text-6xl font-black tracking-tighter text-gray-900 sm:text-7xl xl:text-8xl"
                    >
                        {NAME_LETTERS.map((ch, i) => (
                            <motion.span
                                key={i}
                                aria-hidden="true"
                                className="inline-block"
                                initial={{ opacity: 0, y: 40, rotate: 6 }}
                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{ delay: 0.3 + i * 0.06, type: 'spring', stiffness: 260, damping: 18 }}
                            >
                                {ch}
                            </motion.span>
                        ))}
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 300 16"
                            preserveAspectRatio="none"
                            className="absolute -bottom-2 left-0 h-3 w-full"
                        >
                            <defs>
                                <linearGradient id="ul" x1="0" x2="1">
                                    <stop offset="0%" style={{ stopColor: 'var(--color-lightblue-500)' }} />
                                    <stop offset="100%" style={{ stopColor: 'var(--color-darkblue-500)' }} />
                                </linearGradient>
                            </defs>
                            <motion.path
                                d="M4 10 C 60 2, 120 14, 180 6 S 270 8, 296 5"
                                fill="none"
                                stroke="url(#ul)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 1, duration: 0.9, ease: 'easeInOut' }}
                            />
                        </svg>
                    </h1>
                </motion.div>

                {/* Role: typewriter in code brackets */}
                <motion.h2
                    {...fadeUp(0.3)}
                    className="mt-7 font-mono text-lg font-semibold text-gray-800 sm:text-xl xl:text-2xl"
                >
                    <span className="text-darkblue-500">&lt;</span>
                    <Typewriter words={ROLES} />
                    <span className="text-darkblue-500"> /&gt;</span>
                </motion.h2>

                {/* Description with accent line + chips */}
                <motion.div {...fadeUp(0.4)} className="mx-auto mt-6 max-w-lg xl:mx-0">
                    <p className="border-l-2 border-lightblue-500/70 pl-4 text-left text-base leading-relaxed text-gray-600 md:text-lg">
                        I help students ship <strong className="font-semibold text-gray-900">final-year projects</strong> and
                        help <strong className="font-semibold text-gray-900">businesses and startups</strong> go digital
                        with websites, mobile apps and custom solutions. Got an idea? Let's turn it into something real.
                    </p>

                    <ul className="mt-4 flex flex-wrap justify-center gap-2 xl:justify-start">
                        {STACK.map((s) => (
                            <li
                                key={s}
                                className="rounded-md border border-gray-300/80 bg-white/70 px-2.5 py-1 font-mono text-xs
                   font-medium text-gray-700 backdrop-blur transition-colors hover:border-lightblue-500 hover:text-darkblue-600"
                            >
                                {s}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Resume */}
                <motion.div {...fadeUp(0.5)} className="mt-7 flex justify-center xl:justify-start">
                    <motion.a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn group relative inline-flex items-center gap-2 overflow-hidden rounded-full
               bg-gradient-to-r from-lightblue-500 via-darkblue-500 to-darkblue-700 px-7 py-3 text-base font-semibold
               text-white shadow-lg shadow-darkblue-500/40 ring-1 ring-white/20
               transition-shadow duration-300 hover:shadow-xl hover:shadow-darkblue-500/60
               focus:outline-none focus-visible:ring-2 focus-visible:ring-lightblue-400 focus-visible:ring-offset-2
               focus-visible:ring-offset-gray-100"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    >
                        {/* Shine sweep */}
                        <span
                            aria-hidden="true"
                            className="resume-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12
                 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />

                        <Download className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                        <span className="relative z-10">Download Resume</span>
                    </motion.a>
                </motion.div>

                {/* Socials */}
                <motion.div
                    {...fadeUp(0.6)}
                    className="mt-7 flex justify-center gap-3 sm:gap-4 xl:justify-start"
                >
                    {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={`rounded-full border border-gray-300 bg-white p-2.5 text-gray-600
                          shadow-sm transition-colors duration-300 sm:p-3 ${color}`}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
);

export default Header;