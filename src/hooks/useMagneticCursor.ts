import { useEffect, useRef, useState } from 'react';

interface MagneticCursorOptions {
    strength?: number;
    distance?: number;
    scale?: number;
}

interface MagneticCursorReturn {
    ref: React.RefObject<HTMLElement | null>;
    mousePosition: { x: number; y: number };
    isActive: boolean;
}

export const useMagneticCursor = ({
    strength = 0.5,
    distance = 100,
    scale = 1.2,
}: MagneticCursorOptions = {}): MagneticCursorReturn => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
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

            const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distanceFromCenter < distance) {
                setIsActive(true);
                const moveX = (deltaX * strength) * -1;
                const moveY = (deltaY * strength) * -1;

                element.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
                element.style.transition = 'transform 0.2s ease-out';
            } else {
                setIsActive(false);
                element.style.transform = 'translate(0, 0) scale(1)';
                element.style.transition = 'transform 0.3s ease-out';
            }

            setMousePosition({ x: mouseX, y: mouseY });
        };

        const handleMouseLeave = () => {
            setIsActive(false);
            element.style.transform = 'translate(0, 0) scale(1)';
            element.style.transition = 'transform 0.3s ease-out';
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength, distance, scale]);

    return {
        ref,
        mousePosition,
        isActive,
    };
};

export default useMagneticCursor;