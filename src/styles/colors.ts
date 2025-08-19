export const colors = {
    // Primary brand colors
    primary: {
        900: '#4a2f1a',
        800: '#5a381f',
        700: '#6e4424', // Main brand color
        600: '#82552d',
        500: '#966636',
        400: '#aa7740',
        300: '#be8849',
        200: '#d29952',
        100: '#e6aa5b',
        50: '#f4bb6f',
    },

    // Neutral colors
    neutral: {
        900: '#000000', // Black
        800: '#1a1a1a',
        700: '#333333',
        600: '#4d4d4d',
        500: '#666666',
        400: '#808080',
        300: '#999999',
        200: '#b3b3b3',
        100: '#cccccc',
        50: '#e6e6e6',
        25: '#f2f2f2',
        10: '#f9f9f9',
        0: '#ffffff',
    },

    // Background colors
    background: {
        primary: '#e3d6c3', // Warm beige
        secondary: '#e4e4e4', // Light gray
        tertiary: '#f5f5f5',
        dark: '#1a1a1a',
    },

    // Text colors
    text: {
        primary: '#000000',
        secondary: '#333333',
        tertiary: '#666666',
        inverse: '#ffffff',
        muted: '#999999',
    },

    // Accent colors
    accent: {
        warm: '#d4a574',
        cool: '#7c9885',
        highlight: '#c9a876',
    },

    // Semantic colors
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
} as const;

export type ColorName = keyof typeof colors;