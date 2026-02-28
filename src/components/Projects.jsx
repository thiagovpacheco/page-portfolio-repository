import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
    {
        id: 1,
        title: 'Nura Health',
        category: 'Medicina de Precisão',
        description: 'Uma clínica de otimização humana que utiliza ciência de precisão e algoritmos para decodificar a complexidade biológica e entregar a máxima performance da fisiologia humana.',
        tech: ['React', 'Tailwind', 'GSAP'],
        url: 'https://pagethiagovpacheco1.netlify.app/',
        image: '/projects/nura.png',
    },
    {
        id: 2,
        title: 'Burger',
        category: 'Gastronomia Digital',
        description: 'Uma hamburgueria premium que oferece hambúrgueres artesanais suculentos, feitos com ingredientes de alta qualidade, proporcionando uma experiência gastronômica inesquecível.',
        tech: ['React', 'Framer Motion', 'Tailwind'],
        url: 'https://pagethiagovpacheco2.netlify.app/',
        image: '/projects/burger.png',
    },
    {
        id: 3,
        title: 'Forge',
        category: 'Design & Tecnologia',
        description: 'Construção de websites premium focados em conversão utilizando precisão de IA. Design de alto nível sem comprometer a qualidade.',
        tech: ['React', 'Tailwind', 'GSAP'],
        url: 'https://pagethiagovpacheco3.netlify.app/',
        image: '/projects/vision.png',
    },
    {
        id: 4,
        title: 'aigen.',
        category: 'IA Gerativa',
        description: 'Entre no futuro da IA. Design deslumbrante, interação contínua e possibilidades infinitas para sua presença digital.',
        tech: ['React', 'API AI Studio', 'Tailwind'],
        url: 'https://pagethiagovpacheco4.netlify.app/',
        image: '/projects/fintech.png',
    },
];

const Projects = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.projects-header',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.projects-header',
                    start: 'top 85%',
                }
            }
        );

        gsap.fromTo('.project-card',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 80%',
                }
            }
        );
    }, { scope: container });

    return (
        <section id="projects" ref={container} className="py-32 px-6 bg-white text-navy relative rounded-[3rem] mx-2 sm:mx-6 my-12 overflow-hidden shadow-2xl">
            <div className="max-w-7xl mx-auto">
                <div className="projects-header mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <span className="text-blue font-medium tracking-wider uppercase text-sm mb-4 block">Casos de Estudo</span>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold">Trabalhos Selecionados</h2>
                    </div>
                    <p className="max-w-md text-navy/70 text-lg">
                        Uma vitrine de experiências digitais projetadas para converter, engajar e elevar marcas ao próximo nível.
                    </p>
                </div>

                <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card group relative block h-[450px] md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-slate cursor-pointer ring-1 ring-navy/5 shadow-2xl shadow-navy/20"
                        >
                            <div className="absolute inset-0 z-0 overflow-hidden bg-slate">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40"
                                    loading="lazy"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent opacity-90 z-10 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                                <div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-white/80 font-medium tracking-wide uppercase text-sm">
                                            {project.category}
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                            <ExternalLink size={18} />
                                        </div>
                                    </div>

                                    <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">{project.title}</h3>

                                    <div className="opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                        <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((techItem) => (
                                                <span key={techItem} className="text-xs font-mono px-3 py-1 border border-slate/20 rounded-full text-slate/90 bg-navy/40 backdrop-blur-sm">
                                                    {techItem}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
