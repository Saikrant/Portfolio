import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
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
        <section
            id="skills"
            className="py-24 px-6"
            style={{ background: 'var(--white)' }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">
                        Technical Arsenal
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skillsData.map((group) => (
                        <motion.div key={group.category} variants={item}>
                            <h3 className="text-accent uppercase text-xs font-semibold tracking-widest mb-4">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium rounded border border-border bg-card-bg text-ink-muted
                      hover:bg-ink hover:text-cream hover:border-ink transition-all duration-200"
                                        data-cursor
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
