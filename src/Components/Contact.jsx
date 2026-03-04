import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-24 px-6"
            style={{ background: 'var(--dark)' }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="font-display text-4xl md:text-6xl font-light italic text-white leading-tight">
                        Let's build something remarkable.
                    </h2>
                    <p className="mt-6 text-gray-400 text-lg font-light max-w-xl mx-auto">
                        Open to Software Engineering, Data Analytics, UI/UX, and AI roles.
                        Full-time or contract.
                    </p>
                </motion.div>

                {/* Contact cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
                >
                    <a
                        href="mailto:saikranth1219@gmail.com"
                        className="group p-6 rounded border border-gray-800 flex flex-col items-center gap-3
              hover:border-accent transition-all no-underline"
                        style={{ background: 'var(--dark-card)' }}
                        data-cursor
                    >
                        <FiMail className="text-accent" size={24} />
                        <span className="text-gray-400 uppercase text-xs font-semibold tracking-widest">
                            Email Me
                        </span>
                        <span className="text-white text-sm font-medium group-hover:text-accent transition-colors">
                            saikranth1219@gmail.com
                        </span>
                    </a>

                    <a
                        href="tel:+19704122140"
                        className="group p-6 rounded border border-gray-800 flex flex-col items-center gap-3
              hover:border-accent transition-all no-underline"
                        style={{ background: 'var(--dark-card)' }}
                        data-cursor
                    >
                        <FiPhone className="text-accent" size={24} />
                        <span className="text-gray-400 uppercase text-xs font-semibold tracking-widest">
                            Call Me
                        </span>
                        <span className="text-white text-sm font-medium group-hover:text-accent transition-colors">
                            +1 970-412-2140
                        </span>
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-10 flex items-center justify-center gap-6"
                >
                    <a
                        href="https://linkedin.com/in/ksaikranth-k/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-accent transition-colors"
                        data-cursor
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin size={22} />
                    </a>
                    <a
                        href="https://github.com/ksaikranth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-accent transition-colors"
                        data-cursor
                        aria-label="GitHub"
                    >
                        <FiGithub size={22} />
                    </a>
                </motion.div>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-16 text-gray-600 text-sm"
                >
                    © 2026 Sai Kranth Koneru · Built with React & intent.
                </motion.p>
            </div>
        </section>
    );
};

export default Contact;
