import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (options = {}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: options.threshold || 0.2,
                rootMargin: options.rootMargin || '0px',
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [options.threshold, options.rootMargin]);

    return { ref, inView };
};

export default useScrollAnimation;
