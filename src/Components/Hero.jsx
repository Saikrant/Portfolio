import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { roleRotatorItems, statsData } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const StatCounter = ({ number, suffix, label }) => {
    const { ref, inView } = useScrollAnimation({ threshold: 0.3 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        const isDecimal = number % 1 !== 0;
        const duration = 1500;
        const steps = 60;
        const increment = number / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current += increment;
            if (step >= steps) {
                setCount(number);
                clearInterval(timer);
            } else {
                setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [inView, number]);

    return (
        <div ref={ref} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-ink leading-none">
                {count}{suffix}
            </div>
            <div className="text-xs uppercase tracking-widest text-ink-light mt-1 font-body font-medium">
                {label}
            </div>
        </div>
    );
};

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roleRotatorItems.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section
            id="hero"
            className="min-h-screen pt-28 md:pt-32 pb-16 px-6 max-w-7xl mx-auto"
        >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 items-center min-h-[80vh]">
                {/* Left Column - 60% */}
                <motion.div
                    className="md:col-span-3"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {/* Availability badge */}
                    <motion.div variants={item}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
                            style={{ background: 'var(--accent-pale)', color: 'var(--accent)' }}
                        >
                            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                            Available for Hire · Fort Collins, CO
                        </span>
                    </motion.div>

                    {/* Giant heading */}
                    <motion.h1
                        variants={item}
                        className="mt-8 font-display leading-none"
                        style={{ fontSize: 'clamp(3.2rem, 6vw, 6rem)', lineHeight: 0.9 }}
                    >
                        <span className="font-light italic block">Software</span>
                        <span className="font-bold block mt-1">Engineer</span>
                        <span className="font-bold block mt-1">
                            <span className="text-accent">&amp;</span> Designer.
                        </span>
                    </motion.h1>

                    {/* Role rotator */}
                    <motion.div variants={item} className="mt-6 h-8 relative overflow-hidden">
                        <span className="text-accent font-body font-medium text-lg mr-2">→</span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roleIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="font-body text-lg text-ink-muted font-medium absolute left-6"
                            >
                                {roleRotatorItems[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={item}
                        className="mt-6 text-ink-muted font-light leading-relaxed max-w-lg"
                        style={{ fontSize: '1.05rem' }}
                    >
                        Building enterprise systems, data pipelines, and pixel-perfect
                        interfaces — across the full stack and four disciplines.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        variants={item}
                        className="mt-10 grid grid-cols-4 gap-4 max-w-md"
                    >
                        {statsData.map((stat) => (
                            <StatCounter key={stat.label} {...stat} />
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-ink text-cream font-medium text-sm rounded hover:bg-accent transition-colors no-underline"
                            data-cursor
                        >
                            View My Work ↓
                        </a>
                        <a
                            href="/SaiKranthKoneru.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3.5 border border-ink text-ink font-medium text-sm rounded hover:bg-ink hover:text-cream transition-all no-underline"
                            data-cursor
                        >
                            Download Resume ↗
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column - 40% */}
                <motion.div
                    className="md:col-span-2 flex flex-col items-center"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {/* Photo with accent frame */}
                    <div className="relative" style={{ transform: 'rotate(-1deg)' }}>
                        <div
                            className="absolute -top-3 -right-3 w-full h-full border-2 border-accent rounded-sm"
                            style={{ zIndex: 0 }}
                        />
                        <img
                            src="/profile.jpg"
                            alt="Sai Kranth Koneru"
                            className="relative z-10 w-72 md:w-80 h-auto rounded-sm object-cover shadow-lg"
                            style={{ filter: 'grayscale(10%)' }}
                        />
                    </div>

                    {/* Floating chips */}
                    <div className="mt-8 flex flex-wrap gap-3 justify-center">
                        <div
                            className="px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md border border-border"
                            style={{
                                background: 'rgba(237, 234, 227, 0.7)',
                                animation: 'float 4s ease-in-out infinite',
                            }}
                        >
                            React · TypeScript · Figma
                        </div>
                        <div
                            className="px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md border border-border"
                            style={{
                                background: 'rgba(237, 234, 227, 0.7)',
                                animation: 'float-delayed 5s ease-in-out infinite',
                            }}
                        >
                            Python · Power BI · LangChain
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
