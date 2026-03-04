import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { projectsData } from '../data/portfolioData';

const StickyFeaturedCard = ({ project, index, total, wrapperRef }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLast = index === total - 1;

    // Scroll-linked animation: scale down + add border-radius as card gets buried
    const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] });
    const segmentStart = index / total;
    const segmentEnd = (index + 1) / total;
    const scale = useTransform(
        scrollYProgress,
        [segmentStart, segmentEnd],
        isLast ? [1, 1] : [1, 0.95]
    );
    const borderRadius = useTransform(
        scrollYProgress,
        [segmentStart, segmentEnd],
        isLast ? [32, 32] : [32, 32]
    );

    return (
        <motion.div
            className="project-card-sticky"
            style={{ zIndex: index + 1, scale, borderRadius, marginBottom: isLast ? 0 : '20px' }}
        >
            <a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline block h-full"
                data-cursor
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Full-bleed background */}
                <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: 'inherit' }}>
                    {/* Project image background */}
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />

                    {/* Dark gradient overlay for text readability */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.05) 100%)',
                        }}
                    />

                    {/* Content — centered like Portavia reference */}
                    <div className="relative z-20 h-full flex flex-col justify-end items-center text-center p-8 md:p-16 pb-12 md:pb-20">
                        {/* Category badge */}
                        <motion.span
                            className="inline-block px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 backdrop-blur-md"
                            style={{
                                background: 'rgba(120, 100, 255, 0.25)',
                                color: 'rgba(255,255,255,0.9)',
                                border: '1px solid rgba(120, 100, 255, 0.3)',
                            }}
                            animate={{ y: isHovered ? -4 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {project.category}
                        </motion.span>

                        {/* Title */}
                        <motion.h3
                            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-4"
                            style={{ letterSpacing: '0.04em' }}
                            animate={{ y: isHovered ? -4 : 0 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                        >
                            {project.title}
                        </motion.h3>

                        {/* Description */}
                        <p className="text-gray-300 font-light text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-accent"
                        initial={{ width: '0%' }}
                        animate={{ width: isHovered ? '100%' : '0%' }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                </div>
            </a>
        </motion.div>
    );
};

const CompactCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
        >
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline block"
                data-cursor
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden rounded-xl" style={{ border: '1px solid var(--border)' }}>
                    {/* Image area */}
                    <motion.div
                        className="relative h-56 flex items-center justify-center overflow-hidden"
                        style={{ background: project.gradient }}
                    >
                        <motion.span
                            className="text-6xl"
                            style={{ opacity: 0.3, filter: 'grayscale(20%)' }}
                            animate={{
                                scale: isHovered ? 1.2 : 1,
                                opacity: isHovered ? 0.5 : 0.3,
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            {project.icon}
                        </motion.span>

                        {/* Category badge overlaid */}
                        <span
                            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
                            style={{
                                background: 'rgba(200, 65, 10, 0.25)',
                                color: '#F0724A',
                                border: '1px solid rgba(200, 65, 10, 0.3)',
                            }}
                        >
                            {project.category}
                        </span>
                    </motion.div>

                    {/* Text area */}
                    <div className="p-6" style={{ background: 'var(--card-bg)' }}>
                        <h4 className="font-display text-xl font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--ink)' }}>
                            {project.title}
                        </h4>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-muted)' }}>
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 text-xs rounded-full"
                                    style={{
                                        background: 'rgba(0,0,0,0.04)',
                                        color: 'var(--ink-muted)',
                                        border: '1px solid var(--border)',
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-1 text-accent text-sm font-medium">
                            <FiGithub size={14} />
                            <span>View on GitHub</span>
                            <motion.span
                                animate={{ x: isHovered ? 4 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FiArrowRight size={14} />
                            </motion.span>
                        </div>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-accent"
                        initial={{ width: '0%' }}
                        animate={{ width: isHovered ? '100%' : '0%' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                </div>
            </a>
        </motion.div>
    );
};

const Projects = () => {
    const featured = projectsData.filter((p) => p.featured);
    const more = projectsData.filter((p) => !p.featured);
    const stickyWrapperRef = useRef(null);

    return (
        <section
            id="work"
            style={{ background: 'var(--cream)' }}
        >
            {/* Section header — outside sticky wrapper so it scrolls normally */}
            <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="mb-6"
                >
                    <span className="text-accent uppercase text-xs font-semibold tracking-widest block mb-4">
                        Selected Work
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wide" style={{ color: 'var(--ink)' }}>
                        Featured Projects
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-light text-lg max-w-2xl" style={{ color: 'var(--ink-muted)' }}
                >
                    These projects reflect my passion for building across the full stack —
                    solving real problems through clean code, thoughtful design, and data-driven
                    thinking.
                </motion.p>
            </div>

            {/* Sticky card stacking wrapper */}
            <div
                ref={stickyWrapperRef}
                className="projects-sticky-wrapper"
                style={{ height: `${featured.length * 100}vh` }}
            >
                {featured.map((project, index) => (
                    <StickyFeaturedCard
                        key={project.number}
                        project={project}
                        index={index}
                        total={featured.length}
                        wrapperRef={stickyWrapperRef}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-24 pt-20">

                {/* More projects heading */}
                {more.length > 0 && (
                    <>
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide mb-10" style={{ color: 'var(--ink)' }}
                        >
                            More Projects
                        </motion.h3>

                        {/* Compact grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {more.map((project, index) => (
                                <CompactCard key={project.number} project={project} index={index} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Projects;
