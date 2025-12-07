import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
    const { pathname } = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        // Cancel any ongoing animation
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        setIsTransitioning(true);

        // Smooth animated scroll with custom easing
        const duration = 600;
        const start = window.pageYOffset;
        const startTime = performance.now();

        const easeInOutCubic = (t: number) => {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeInOutCubic(progress);

            window.scrollTo(0, start * (1 - eased));

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animateScroll);
            } else {
                setIsTransitioning(false);
                animationFrameRef.current = null;
            }
        };

        animationFrameRef.current = requestAnimationFrame(animateScroll);

        // Cleanup function
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };
    }, [pathname]);

    return (
        <>
            {isTransitioning && (
                <div
                    className="fixed inset-0 z-[9999] pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, rgba(253, 108, 48, 0.1) 0%, rgba(253, 108, 48, 0.05) 100%)',
                        animation: 'fadeOut 0.6s ease-out forwards'
                    }}
                />
            )}
            <style>{`
                @keyframes fadeOut {
                    0% { opacity: 1; }
                    100% { opacity: 0; }
                }
            `}</style>
        </>
    );
}
