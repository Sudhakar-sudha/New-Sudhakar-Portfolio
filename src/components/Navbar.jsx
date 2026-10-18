import { useEffect, useRef, useState } from 'react';
import {
    Home, User, Briefcase, Folder, Code, BookOpen, Award, Mail, Menu, X,
} from 'lucide-react';

const NAV_LINKS = [
    { name: 'Home', href: 'home', icon: Home },
    { name: 'About', href: 'about', icon: User },
    { name: 'Experience', href: 'experience', icon: Briefcase },
    { name: 'Projects', href: 'projects', icon: Folder },
    { name: 'Skills', href: 'skills', icon: Code },
    { name: 'Education', href: 'education', icon: BookOpen },
    { name: 'Certificates', href: 'certificates', icon: Award },
    { name: 'Contact', href: 'contact', icon: Mail },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const clickLock = useRef(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        // highlight immediately and ignore the spy while smooth-scrolling
        setActive(id);
        clickLock.current = true;
        setTimeout(() => { clickLock.current = false; }, 900);

        el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    // Navbar background + scroll-spy (single, reliable scroll listener)
    useEffect(() => {
        let ticking = false;

        const update = () => {
            ticking = false;
            setScrolled(window.scrollY > 20);
            if (clickLock.current) return;

            // The "spy line": 64px navbar + 30% of the screen height
            const line = 64 + window.innerHeight * 0.3;

            let current = NAV_LINKS[0].href;
            for (const { href } of NAV_LINKS) {
                const el = document.getElementById(href);
                if (el && el.getBoundingClientRect().top <= line) current = href;
            }

            // Bottom of the page -> last section (Contact)
            const atBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (atBottom) current = NAV_LINKS[NAV_LINKS.length - 1].href;

            setActive(current);
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    // Lock body scroll + close on Escape while drawer is open
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen]);

    // Colours depend on scroll state (white / black / gray / light blue / dark blue only)
    const textIdle = scrolled ? 'text-gray-400' : 'text-gray-900';
    const textHover = scrolled ? 'hover:text-white' : 'hover:text-black';
    const textActive = scrolled ? 'text-white' : 'text-black';
    const underline = scrolled ? 'after:bg-white' : 'after:bg-gray-900';

    const linkBase =
        'relative flex items-center gap-2 font-medium transition-colors duration-300 ' +
        'after:absolute after:left-0 after:-bottom-1 after:h-0.5 ' +
        'after:transition-all after:duration-300 ' + underline;

    return (
        <>
            <nav
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-black/90 text-white shadow-lg backdrop-blur'
                    : 'bg-transparent text-gray-900'
                    }`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('home')}
                        aria-label="Go to home"
                        className="group flex items-center"
                    >

                        <div className="flex items-center space-x-2 cursor-pointer group">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-2xl 
                            bg-gradient-to-r from-[#004aad]  to-[#cb6ce6]
                            transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                                S
                            </div>
                        </div>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden items-center gap-6 xl:flex">
                        {NAV_LINKS.map(({ name, href, icon: Icon }) => {
                            const isActive = active === href;
                            return (
                                <button
                                    key={name}
                                    onClick={() => scrollTo(href)}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={` cursor-pointer ${linkBase} ${isActive
                                        ? `${textActive} after:w-full`
                                        : `${textIdle} after:w-0 ${textHover} hover:after:w-full`
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{name}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={isOpen}
                        className={`transition-colors hover:text-lightblue-500 xl:hidden ${scrolled ? 'text-white' : 'text-gray-900'
                            }`}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Drawer + backdrop live OUTSIDE <nav> (backdrop-blur would trap `fixed` children) */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-[55] bg-black/60 transition-opacity duration-300 xl:hidden ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                    }`}
            />

            <aside
                aria-hidden={!isOpen}
                className={`fixed right-0 top-0 z-[60] flex h-dvh w-72 max-w-[85vw] flex-col bg-black p-5 text-white
                    shadow-2xl transition-transform duration-300 xl:hidden ${isOpen ? 'translate-x-0' : 'invisible translate-x-full'
                    }`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="mb-8 self-end text-white transition-colors hover:text-lightblue-400"
                >
                    <X size={28} />
                </button>

                <div className="flex flex-col gap-6 overflow-y-auto px-2">
                    {NAV_LINKS.map(({ name, href, icon: Icon }) => {
                        const isActive = active === href;
                        return (
                            <button
                                key={name}
                                onClick={() => scrollTo(href)}
                                className={`cursor-pointer flex items-center gap-3 text-left text-lg font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                <span>{name}</span>
                            </button>
                        );
                    })}
                </div>
            </aside>
        </>
    );
}