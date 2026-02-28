import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Initial state setup
        gsap.set('.hero-avatar', { scale: 0.5, opacity: 0 });
        gsap.set('.hero-text-line', { y: 100, opacity: 0 });
        gsap.set('.hero-subtitle', { y: 20, opacity: 0 });
        gsap.set('.hero-cta', { scale: 0.8, opacity: 0 });

        tl.to('.hero-avatar', {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'back.out(1.5)'
        })
            .to('.hero-text-line', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
            }, '-=0.5')
            .to('.hero-subtitle', {
                y: 0,
                opacity: 1,
                duration: 1,
            }, '-=0.6')
            .to('.hero-cta', {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'back.out(1.7)'
            }, '-=0.4');

        gsap.to('.hero-arrow', {
            y: 10,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            duration: 1.5,
        });
    }, { scope: container });

    const scrollToProjects = (e) => {
        e.preventDefault();
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={container} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2564&auto=format&fit=crop"
                    alt="Abstract background"
                    className="w-full h-full object-cover scale-105 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate/70 via-slate/90 to-slate" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-0 w-full">

                {/* Profile Avatar */}
                <div className="hero-avatar mb-6 rounded-full p-1 border-2 border-blue/20 bg-white shadow-2xl shadow-blue/10">
                    <img
                        src="/assets/avatar.jpg"
                        alt="Thiago V. Pacheco"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                    />
                </div>

                {/* Subtitle */}
                <div className="hero-subtitle mb-4 px-4 py-1.5 rounded-full border border-blue/20 bg-blue/10 text-blue text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-lg shadow-blue/5">
                    Bem-vindo ao meu portfólio
                </div>

                {/* Main Heading */}
                <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-navy mb-6 leading-[1.1] text-balance">
                    <div className="overflow-hidden p-1">
                        <span className="hero-text-line block">Criando Experiências</span>
                    </div>
                    <div className="overflow-hidden p-1">
                        <span className="hero-text-line block text-blue drop-shadow-md">Digitais</span>
                    </div>
                </h1>

                {/* Description */}
                <p className="hero-subtitle text-base sm:text-lg text-navy/80 max-w-2xl mb-10 font-medium text-balance">
                    Construo sites modernos, sofisticados e altamente interativos que ajudam marcas a se destacarem e conectarem com sua audiência.
                </p>

                {/* CTA */}
                <div className="hero-cta">
                    <a
                        href="#projects"
                        onClick={scrollToProjects}
                        className="group flex items-center gap-2 px-8 py-4 bg-blue text-white rounded-[2rem] font-medium text-lg hover:bg-blue/90 transition-all duration-300 shadow-xl shadow-blue/20"
                    >
                        Explorar Meu Trabalho
                        <ArrowDown size={20} className="hero-arrow group-hover:text-white transition-colors" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
