import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data/portfolioData';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'py-3 border-b border-border'
                        : 'py-5'
                    }`}
                style={{
                    background: 'rgba(245, 242, 235, 0.92)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                }}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="font-display text-2xl font-bold text-ink no-underline"
                        data-cursor
                    >
                        Sai Kranth<span className="text-accent">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-body text-sm font-medium text-ink-muted hover:text-ink transition-colors no-underline tracking-wide"
                                data-cursor
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Available pill */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white">
                            <span
                                className="w-2 h-2 rounded-full bg-green-500 animate-pulse-green inline-block"
                            />
                            <span className="text-xs font-medium text-ink-muted tracking-wide">
                                Available for Hire
                            </span>
                        </div>

                        {/* Resume button */}
                        <a
                            href="/SaiKranthKoneru.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium border border-ink text-ink rounded hover:bg-ink hover:text-cream transition-all no-underline"
                            data-cursor
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-ink bg-transparent border-none text-2xl"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                        data-cursor
                    >
                        {mobileOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 w-3/4 h-full z-40 flex flex-col pt-24 px-8 gap-6"
                        style={{
                            background: 'rgba(245, 242, 235, 0.98)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="font-display text-3xl font-light text-ink no-underline hover:text-accent transition-colors"
                                data-cursor
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-green inline-block" />
                            <span className="text-sm text-ink-muted">Available for Hire</span>
                        </div>
                        <a
                            href="/SaiKranthKoneru.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 px-6 py-3 text-center text-sm font-medium border border-ink text-ink rounded hover:bg-ink hover:text-cream transition-all no-underline"
                            data-cursor
                        >
                            Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 z-30 md:hidden"
                        onClick={() => setMobileOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
