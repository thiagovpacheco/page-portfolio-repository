import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const featuresData = [
    {
        id: 'f1',
        title: 'UX/UI Design & Prototipagem',
        description: 'Especialista em criar interfaces intuitivas e atraentes no Figma. Do wireframe ao protótipo de alta fidelidade, o foco é a experiência do usuário.',
        skills: ['Figma', 'Adobe XD', 'Prototipagem', 'Design Systems']
    },
    {
        id: 'f2',
        title: 'React & Desenvolvimento Web',
        description: 'Transformo designs em código pixel-perfect usando tecnologias modernas. Tenho sólida base em React, Tailwind CSS e web components modernos.',
        skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS']
    },
    {
        id: 'f3',
        title: 'Animações & Motion',
        description: 'Utilizo GSAP e bibliotecas como Framer Motion para adicionar micro-interações que encantam, garantindo que o site seja "vivo".',
        skills: ['GSAP', 'Framer Motion', 'CSS Animations', 'Three.js']
    }
];

const Features = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.feature-header', {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.feature-header',
                start: 'top 85%',
            }
        });

        gsap.from('.feature-item', {
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.feature-list',
                start: 'top 80%',
            }
        });
    }, { scope: container });

    return (
        <section id="features" ref={container} className="py-24 px-6 max-w-7xl mx-auto my-12">
            <div className="feature-header mb-16 text-center">
                <span className="text-blue font-medium tracking-wider uppercase text-sm mb-4 block">Minha Experiência</span>
                <h2 className="font-heading text-4xl md:text-6xl font-bold text-navy">Habilidades Principais</h2>
            </div>

            <div className="max-w-4xl mx-auto">

                {/* Static List */}
                <div className="feature-list w-full flex flex-col gap-8">
                    {featuresData.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="feature-item border-l-4 pl-6 py-4 border-blue/20"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <span className="font-mono text-sm text-blue font-bold">
                                    0{index + 1}
                                </span>
                                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-navy">
                                    {feature.title}
                                </h3>
                            </div>

                            <div className="mt-4">
                                <p className="text-navy/70 text-lg leading-relaxed pl-9 mb-6">
                                    {feature.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pl-9">
                                    {feature.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-blue/5 text-blue text-xs font-semibold rounded-full border border-blue/10"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
