import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-navy text-slate pt-24 pb-8 px-6 mt-20 rounded-t-[3rem]">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-slate/20 pb-16">
                    <div className="max-w-xl">
                        <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-balance">
                            Vamos criar algo incrível juntos?
                        </h2>
                        <p className="text-xl text-slate/70 font-medium mb-8">
                            Aberto a novas oportunidades e pronto para colaborar.
                        </p>
                        <a
                            href="https://wa.link/4exsol"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-blue text-white rounded-full font-medium shadow-md shadow-blue/20 hover:bg-blue/80 transition-colors"
                        >
                            Vamos Conversar
                        </a>
                    </div>

                    <a
                        href="mailto:thiagovpacheco@gmail.com"
                        className="group flex flex-col gap-2 items-start md:items-end text-right"
                    >
                        <span className="text-sm font-medium tracking-widest uppercase text-blue group-hover:text-slate transition-colors">
                            Entre em contato
                        </span>
                        <div className="flex items-center gap-2 text-2xl md:text-3xl font-heading font-semibold border-b border-transparent group-hover:border-slate transition-all">
                            thiagovpacheco@gmail.com
                            <ArrowUpRight size={28} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                    </a>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate/60">

                    {/* Copyright */}
                    <div>
                        &copy; {currentYear} Thiago V. Pacheco. Todos os direitos reservados.
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-slate transition-colors flex items-center gap-2">
                            <Linkedin size={18} />
                            <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                        <a href="#" className="hover:text-slate transition-colors flex items-center gap-2">
                            <Github size={18} />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>
                        <a href="#" className="hover:text-slate transition-colors flex items-center gap-2">
                            <Twitter size={18} />
                            <span className="hidden sm:inline">Twitter</span>
                        </a>
                        <a href="mailto:thiagovpacheco@gmail.com" className="hover:text-slate transition-colors flex items-center gap-2">
                            <Mail size={18} />
                            <span className="hidden sm:inline">Email</span>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
