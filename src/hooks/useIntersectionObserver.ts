import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number | number[];
    rootMargin?: string;
    triggerOnce?: boolean;
    root?: Element | null;
}

interface UseIntersectionObserverReturn {
    ref: React.RefObject<HTMLElement | null>;
    isIntersecting: boolean;
    hasIntersected: boolean;
}

export const useIntersectionObserver = ({
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false,
    root = null,
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isCurrentlyIntersecting = entry.isIntersecting;

                setIsIntersecting(isCurrentlyIntersecting);

                if (isCurrentlyIntersecting && !hasIntersected) {
                    setHasIntersected(true);
                }

                if (triggerOnce && isCurrentlyIntersecting) {
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin,
                root,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce, root, hasIntersected]);

    return {
        ref,
        isIntersecting,
        hasIntersected,
    };
};

export default useIntersectionObserver;