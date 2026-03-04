import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { experienceData, educationData } from '../data/portfolioData';

const Experience = () => {
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
        <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
            >
                <span className="text-accent uppercase text-xs font-semibold tracking-widest block mb-4">
                    Career Path
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">
                    Where I've worked.
                </h2>
            </motion.div>

            {/* Timeline */}
            <motion.div
                className="relative"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Vertical line */}
                <div
                    className="hidden md:block absolute left-8 top-0 bottom-0 w-px"
                    style={{ background: 'var(--accent)', opacity: 0.3 }}
                />

                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="relative md:pl-20 mb-12 last:mb-0"
                    >
                        {/* Timeline dot */}
                        <div
                            className="hidden md:block absolute left-6 top-2 w-4 h-4 rounded-full bg-accent border-4 border-cream animate-pulse-dot"
                            style={{ marginLeft: '1px' }}
                        />

                        {/* Card */}
                        <div className="p-6 md:p-8 rounded border border-border bg-card-bg">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h3 className="font-display text-2xl font-semibold text-ink">
                                    {exp.company}
                                </h3>
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-pale text-accent">
                                    {exp.role}
                                </span>
                            </div>
                            <p className="text-ink-light text-sm mb-4">
                                {exp.date} · {exp.location}
                            </p>
                            <ul className="space-y-2 mb-5">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} className="text-ink-muted text-sm flex items-start gap-2">
                                        <span className="text-accent mt-1.5 text-xs">●</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {exp.chips.map((chip) => (
                                    <span
                                        key={chip}
                                        className="px-3 py-1 text-xs font-medium rounded-full border border-border text-ink-muted bg-cream"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Education */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="mt-16"
            >
                <h3 className="font-display text-2xl font-semibold text-ink mb-6 text-center">
                    Education
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="p-6 rounded border border-border bg-card-bg"
                            style={{ borderLeft: '3px solid var(--accent)' }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <FiStar className="text-accent" size={16} />
                                <h4 className="font-display text-xl font-semibold text-ink">
                                    {edu.school}
                                </h4>
                            </div>
                            <p className="text-ink-muted text-sm font-medium">{edu.degree}</p>
                            {edu.gpa && (
                                <p className="text-accent text-sm font-semibold mt-1">{edu.gpa}</p>
                            )}
                            <p className="text-ink-light text-sm mt-2">
                                {edu.date} · {edu.location}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
