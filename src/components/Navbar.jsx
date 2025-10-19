import { useState } from "react";
import { Home, User, Briefcase, Folder, Code, BookOpen, Award, Mail, Menu, X } from "lucide-react";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "home", icon: Home },
        { name: "About", href: "about", icon: User },
        { name: "Experience", href: "experience", icon: Briefcase },
        { name: "Projects", href: "projects", icon: Folder },
        { name: "Skills", href: "skills", icon: Code },
        { name: "Education", href: "education", icon: BookOpen },
        { name: "Certificates", href: "certificates", icon: Award },
        { name: "Contact", href: "contact", icon: Mail },
    ];

    // Smooth scroll
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between items-center h-16">
                    {/* 🔹 Logo with interactive gradient */}
                    <div className="flex items-center space-x-2 cursor-pointer group">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-2xl 
                            bg-gradient-to-r from-[#004aad]  to-[#cb6ce6]
                            transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                            S
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-8">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => handleScroll(link.href)}
                                    className="relative flex items-center space-x-2 text-gray-300 cursor-pointer font-medium transition-colors duration-300 hover:text-white
                 after:block after:h-0.5 after:bg-white after:absolute after:left-0 after:w-0
                 after:bottom-[-3px] hover:after:w-full after:transition-all after:duration-300"
                                >
                                    <Icon className="w-4 h-4" /> {/* Icon size */}
                                    <span>{link.name}</span>
                                </button>
                            );
                        })}

                    </div>


                    {/* 🔹 Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 🔹 Right Side Navbar (Mobile) */}
            {isOpen && (
                <div className="lg:hidden fixed top-0 right-0 w-64 bg-black text-white shadow-lg z-50 flex flex-col p-4 space-y-6">
                    <div className="flex justify-between items-center p-2">
                        <h2 className="text-xl font-semibold text-blue-400"></h2>
                        <button onClick={() => setIsOpen(false)}>
                            <X size={28} className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-300 " />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-6 self-center mb-10">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => handleScroll(link.href)}
                                    className="relative flex items-center space-x-2 text-lg text-gray-300 font-medium text-left transition-colors duration-300 hover:text-white
                             after:block after:h-0.5 after:bg-white after:absolute after:left-0 after:w-0
                             after:bottom-[-3px] hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{link.name}</span>
                                </button>
                            );
                        })}
                    </div>

                </div>
            )}
        </nav>
    );
}
