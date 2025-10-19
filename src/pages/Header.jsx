import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Instagram, MessageCircle, Mail, Download } from 'lucide-react';
import ParticlesBackground from "../components/ParticlesBackground"
const Header = () => {
    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/sudhakar89/', color: 'hover:text-blue-500' },
        { icon: Github, href: 'https://github.com/Sudhakar-sudha', color: 'hover:text-gray-400' },
        { icon: Instagram, href: 'https://www.instagram.com/frds_call_me_sudha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', color: 'hover:text-pink-500' },
        { icon: MessageCircle, href: 'https://wa.me/7092238804', color: 'hover:text-green-500' },
        { icon: Mail, href: 'mailto:sudhakarsudha8672@gmail.com', color: 'hover:text-red-500' }
    ];
    const handleOpenPdf = () => {
        // Replace with the URL or path to your PDF file
        const pdfUrl = "./Resume.pdf";
        window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
    };
    return (
        <section
            id="home"
            className="flex items-center justify-center px-6 sm:px-8 lg:px-12 relative overflow-hidden min-h-screen"
        >
            <ParticlesBackground />

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />

            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center z-10 mt-10">
                {/* Left Content */}
                <motion.div
                    className=" lg:mt-10 px-2 sm:px-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <motion.div
                        className="text-center lg:text-left space-y-4 mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Freelancer Badge */}
                        <motion.div
                            className="inline-block mb-4 px-5 py-2.5 
                                    bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                                    border border-blue-400/30 
                                    text-white rounded-full font-bold
                                    text-md tracking-wide 
                                    shadow-[0_0_15px_rgba(59,130,246,0.4)] 
                                    backdrop-blur-md"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <a
                                href="https://localestartup.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                🔵 Available for Freelance Work
                            </a>
                        </motion.div>


                        {/* Name */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Hi, I'm Sudhakar
                        </motion.h1>

                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                textShadow: [
                                    "0 0 10px #3b82f6",
                                    "0 0 20px #3b82f6",
                                    "0 0 30px #2563eb",
                                    "0 0 20px #3b82f6",
                                    "0 0 10px #3b82f6",
                                ]
                            }}
                            transition={{ delay: 0.6, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        >
                            Full Stack Web & App Developer
                        </motion.h2>

                    </motion.div>

                    {/* <motion.h1
                        className="text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  bg-blue-500  bg-clip-text text-transparent leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Hi, I'm Sudhakar
                    </motion.h1>
                    <motion.h1
                        className="text-center lg:text-left text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  bg-blue-500 bg-clip-text text-transparent leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Full Stack Web and App Developer
                    </motion.h1> */}

                    {/* <div className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl text-gray-300 mb-2 mt-2 h-10 sm:h-12">
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer . . .',
                                2000,
                                'Data Analyst . . .',
                                2000,
                                'React / React Native . . .',
                                2000,
                                'Nextjs . . .',
                                2000,
                                'Flask / Fastapi . . . ',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="bg-orange-400 bg-clip-text text-transparent"
                        />
                    </div> */}

                    <motion.p
                        className=" text-left text-base sm:text-md md:text-lg text-gray-100 mb-6 max-w-2xl mt-2 "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        👋 Hi there! I'm Sudhakar – a freelance full-stack developer helping students build projects and businesses go digital.
                        <br />
                        🎓 Are you a student? I can guide you with your final-year project, app ideas, or internship support.
                        <br />
                        🧑‍💼 Running a business or startup? Let’s build your website, mobile app, or custom solution together!
                        <br />
                        💡 Got an idea? Let's turn it into something real!
                        <br />
                        👉 Let’s Talk or explore my Projects
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                className={`p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 ${social.color} transition-all duration-300`}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.a>
                        ))}
                    </motion.div>
                    {/* Download Resume Button */}
                    <motion.div
                        className="flex justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <motion.button
                            className="group relative px-6 sm:px-8 py-3 mb-5 sm:py-4 bg-gradient-to-r cursor-pointer from-blue-500 to-violet-600 rounded-full text-white font-semibold text-base sm:text-lg overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleOpenPdf}
                        >
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                <Download className="w-5 h-5" />
                                <span>Download Resume</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </motion.div>

                </motion.div>

                {/* Right Content - Profile Image */}
                <motion.div
                    className="flex justify-center lg:justify-end mt-16 lg:mt-12 sm:mt-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <motion.div
                        className="relative flex items-center justify-center"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                    >
                        {/* IMAGE CONTAINER - fills container fully */}
                        <div className="relative w-48 h-70 sm:w-64 sm:h-100 md:w-80 md:h-120 lg:w-96 lg:h-140 overflow-hidden drop-shadow-[0_0_25px_rgba(0,112,255,0.8)]  transition-all duration-500">
                            <img
                                src="https://res.cloudinary.com/dlfan4caj/image/upload/v1744426192/sudhakar_iw5izp.png"
                                alt="Sudhakar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Header;
