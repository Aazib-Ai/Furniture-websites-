import { useState, useEffect, useCallback, useRef } from 'react';

interface UseInfiniteScrollOptions {
    threshold?: number;
    hasMore: boolean;
    loading: boolean;
    onLoadMore: () => void;
}

export const useInfiniteScroll = ({
    threshold = 0.5,
    hasMore,
    loading,
    onLoadMore,
}: UseInfiniteScrollOptions) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const [element, setElement] = useState<HTMLElement | null>(null);

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting && hasMore && !loading) {
                onLoadMore();
            }
        },
        [hasMore, loading, onLoadMore]
    );

    useEffect(() => {
        if (!element) return;

        observer.current = new IntersectionObserver(handleObserver, {
            threshold,
            rootMargin: '100px',
        });

        observer.current.observe(element);

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [element, handleObserver, threshold]);

    return [setElement];
};