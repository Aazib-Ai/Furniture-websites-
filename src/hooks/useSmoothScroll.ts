import { useCallback } from 'react';

interface SmoothScrollOptions {
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
}

export const useSmoothScroll = () => {
    const scrollToElement = useCallback((
        elementId: string,
        options: SmoothScrollOptions = {}
    ) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: options.behavior || 'smooth',
                block: options.block || 'start',
                inline: options.inline || 'nearest',
            });
        }
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const scrollToSection = useCallback((sectionId: string) => {
        scrollToElement(sectionId, {
            behavior: 'smooth',
            block: 'start',
        });
    }, [scrollToElement]);

    return {
        scrollToElement,
        scrollToTop,
        scrollToSection,
    };
};

export default useSmoothScroll;