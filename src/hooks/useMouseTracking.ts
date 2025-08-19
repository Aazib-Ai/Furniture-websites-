import { useEffect, useRef, useState } from 'react';

interface MouseTrackingOptions {
    strength?: number;
    invert?: boolean;
    maxDistance?: number;
}

interface MouseTrackingReturn {
    ref: React.RefObject<HTMLElement | null>;
    mousePosition: { x: number; y: number };
    elementPosition: { x: number; y: number };
}

export const useMouseTracking = ({
    strength = 0.1,
    invert = false,
    maxDistance = 50,
}: MouseTrackingOptions = {}): MouseTrackingReturn => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;

            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance < maxDistance) {
                const moveX = (deltaX * strength) * (invert ? -1 : 1);
                const moveY = (deltaY * strength) * (invert ? -1 : 1);

                setElementPosition({ x: moveX, y: moveY });
                setMousePosition({ x: mouseX, y: mouseY });
            } else {
                setElementPosition({ x: 0, y: 0 });
            }
        };

        const handleMouseLeave = () => {
            setElementPosition({ x: 0, y: 0 });
        };

        document.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength, invert, maxDistance]);

    return {
        ref,
        mousePosition,
        elementPosition,
    };
};

export default useMouseTracking;