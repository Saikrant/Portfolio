import React from 'react';
import { motion } from 'framer-motion';
import { pillarsData } from '../data/portfolioData';

const Pillars = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <section id="pillars" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
            >
                <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">
                    One engineer. Four disciplines.
                </h2>
                <p className="mt-4 text-ink-muted font-light text-lg">
                    Designed to work across the full product lifecycle.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {pillarsData.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                        <motion.div
                            key={pillar.number}
                            variants={item}
                            whileHover={{
                                y: -6,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            }}
                            className="relative p-8 rounded border border-border bg-card-bg overflow-hidden transition-all group"
                            style={{ borderLeft: '3px solid transparent' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderLeftColor = 'var(--accent)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderLeftColor = 'transparent';
                            }}
                            data-cursor
                        >
                            <span className="font-display text-5xl font-bold text-accent opacity-30 absolute top-4 left-6">
                                {pillar.number}
                            </span>
                            <div className="mt-10 mb-4 text-ink">
                                <Icon size={28} />
                            </div>
                            <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                                {pillar.title}
                            </h3>
                            <p className="text-ink-muted text-sm font-light leading-relaxed mb-6">
                                {pillar.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {pillar.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-3 py-1 text-xs font-medium rounded-full border border-border text-ink-muted"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Pillars;
