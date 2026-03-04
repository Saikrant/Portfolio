import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;
            requestAnimationFrame(animate);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.closest('[data-cursor]')
            ) {
                setIsExpanded(true);
            }
        };

        const handleMouseOut = (e) => {
            if (
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.closest('[data-cursor]')
            ) {
                setIsExpanded(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div
                ref={ringRef}
                className={`cursor-ring ${isExpanded ? 'expanded' : ''}`}
            />
        </>
    );
};

export default Cursor;
