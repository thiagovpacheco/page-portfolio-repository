import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projetos', href: '#projects' },
        { name: 'Experiência', href: '#features' },
        { name: 'Contato', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        // Smooth scroll using native browser API
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex items-center justify-between px-6 py-3 rounded-[3rem] w-[90%] max-w-4xl text-navy font-medium ${isScrolled
                    ? 'glass-nav shadow-lg shadow-navy/10'
                    : 'bg-transparent'
                    }`}
            >
                {/* Logo/Brand */}
                <div className="font-heading font-medium text-lg tracking-tight">
                    <a href="#" onClick={(e) => scrollToSection(e, '#top')}>
                        Thiago V. Pacheco
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-[15px] font-semibold hover:text-blue transition-colors duration-300 drop-shadow-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="https://wa.link/4exsol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-blue text-white hover:bg-blue/80 shadow-md shadow-blue/20"
                    >
                        Vamos Conversar
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-1 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    {isMobileMenuOpen ? <X size={24} className="text-navy" /> : <Menu size={24} className="text-navy" />}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div
                className={`fixed inset-0 z-40 bg-slate flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="flex flex-col items-center space-y-8 text-2xl font-heading text-navy">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="hover:text-blue transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.link/4exsol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 px-8 py-3 bg-blue text-white rounded-full font-medium shadow-md shadow-blue/20 hover:bg-blue/80 transition-colors"
                    >
                        Vamos Conversar
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
