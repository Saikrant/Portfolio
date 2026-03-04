import React from 'react';
import { marqueeItems } from '../data/portfolioData';

const MarqueeStrip = () => {
    const text = marqueeItems.map((item) => `${item} ·`).join(' ');

    return (
        <div
            className="w-full overflow-hidden py-4"
            style={{ background: 'var(--dark)' }}
        >
            <div
                className="flex whitespace-nowrap group"
                style={{
                    animation: 'marquee 30s linear infinite',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.animationPlayState = 'paused';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.animationPlayState = 'running';
                }}
            >
                <span
                    className="text-white font-semibold tracking-widest inline-block mr-4"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}
                >
                    {text}
                </span>
                <span
                    className="text-white font-semibold tracking-widest inline-block mr-4"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}
                >
                    {text}
                </span>
            </div>
        </div>
    );
};

export default MarqueeStrip;
