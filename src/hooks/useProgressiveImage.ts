import { useEffect, useState } from 'react';

interface UseProgressiveImageOptions {
    src: string;
    placeholder?: string;
    blur?: number;
}

interface UseProgressiveImageReturn {
    src: string;
    isLoading: boolean;
    isError: boolean;
}

export const useProgressiveImage = ({
    src,
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiLz48L3N2Zz4=',
}: UseProgressiveImageOptions): UseProgressiveImageReturn => {
    const [currentSrc, setCurrentSrc] = useState(placeholder);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        const img = new Image();

        img.onload = () => {
            setCurrentSrc(src);
            setIsLoading(false);
        };

        img.onerror = () => {
            setIsError(true);
            setIsLoading(false);
        };

        img.src = src;

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src, placeholder]);

    return {
        src: currentSrc,
        isLoading,
        isError,
    };
};

export default useProgressiveImage;