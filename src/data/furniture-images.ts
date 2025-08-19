export interface FurnitureImage {
    id: string;
    url: string;
    alt: string;
    category: string;
    tags: string[];
    photographer?: string;
    photographerUrl?: string;
    source: 'unsplash' | 'pexels';
}

export const furnitureImages: FurnitureImage[] = [
    // Living Room Furniture
    {
        id: 'living-1',
        url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
        alt: 'Modern beige sofa in bright living room',
        category: 'sofas',
        tags: ['sofa', 'living room', 'modern', 'beige', 'comfortable'],
        photographer: 'Sidekix Media',
        photographerUrl: 'https://unsplash.com/@sidekix',
        source: 'unsplash',
    },
    {
        id: 'living-2',
        url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80',
        alt: 'Cozy living room with leather sofa and wooden coffee table',
        category: 'living-sets',
        tags: ['living room', 'leather sofa', 'coffee table', 'cozy', 'warm'],
        photographer: 'Outsite Co',
        photographerUrl: 'https://unsplash.com/@outsideco',
        source: 'unsplash',
    },
    {
        id: 'living-3',
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        alt: 'Modern sectional sofa in contemporary living space',
        category: 'sofas',
        tags: ['sectional', 'modern', 'gray', 'contemporary', 'spacious'],
        photographer: 'R Architecture',
        photographerUrl: 'https://unsplash.com/@rarchitecture',
        source: 'unsplash',
    },
    {
        id: 'living-4',
        url: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80',
        alt: 'Elegant velvet armchair in a stylish interior',
        category: 'armchairs',
        tags: ['armchair', 'velvet', 'living room', 'luxury', 'elegant'],
        photographer: 'Hulki Okan Tabak',
        photographerUrl: 'https://unsplash.com/@hulkiokantabak',
        source: 'unsplash',
    },
    {
        id: 'living-5',
        url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
        alt: 'Modern wooden armchair with a minimalist design',
        category: 'armchairs',
        tags: ['armchair', 'wooden', 'modern', 'minimalist', 'living room'],
        photographer: 'Kam Idris',
        photographerUrl: 'https://unsplash.com/@kamidris',
        source: 'unsplash',
    },
    {
        id: 'living-6',
        url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80',
        alt: 'Comfortable fabric sofa in a bright and airy living room',
        category: 'sofas',
        tags: ['sofa', 'fabric', 'comfortable', 'living room', 'bright'],
        photographer: 'Inside Weather',
        photographerUrl: 'https://unsplash.com/@insideweather',
        source: 'unsplash',
    },

    // Bedroom Furniture
    {
        id: 'bedroom-1',
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
        alt: 'Minimalist bedroom with wooden bed frame and nightstands',
        category: 'beds',
        tags: ['bed', 'bedroom', 'wooden', 'minimalist', 'scandinavian'],
        photographer: 'Chastity Cortijo',
        photographerUrl: 'https://unsplash.com/@chastityco',
        source: 'unsplash',
    },
    {
        id: 'bedroom-2',
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
        alt: 'Luxury bedroom with upholstered bed and elegant decor',
        category: 'beds',
        tags: ['luxury', 'upholstered bed', 'elegant', 'master bedroom', 'premium'],
        photographer: 'Sidekix Media',
        photographerUrl: 'https://unsplash.com/@sidekix',
        source: 'unsplash',
    },
    {
        id: 'bedroom-3',
        url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
        alt: 'Cozy bedroom with storage bed and soft lighting',
        category: 'beds',
        tags: ['storage bed', 'cozy', 'bedroom', 'warm lighting', 'comfortable'],
        photographer: 'Sanibell BV',
        photographerUrl: 'https://unsplash.com/@sanibell',
        source: 'unsplash',
    },

    // Dining Room Furniture
    {
        id: 'dining-1',
        url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
        alt: 'Modern wooden dining table with chairs',
        category: 'dining-sets',
        tags: ['dining table', 'chairs', 'wooden', 'modern', 'family dining'],
        photographer: 'Dan Gold',
        photographerUrl: 'https://unsplash.com/@danielcgold',
        source: 'unsplash',
    },
    {
        id: 'dining-2',
        url: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80',
        alt: 'Elegant marble dining table with upholstered chairs',
        category: 'dining-sets',
        tags: ['marble table', 'upholstered chairs', 'elegant', 'luxury dining'],
        photographer: 'Sidekix Media',
        photographerUrl: 'https://unsplash.com/@sidekix',
        source: 'unsplash',
    },
    {
        id: 'dining-3',
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
        alt: 'Rustic wooden dining table with bench seating',
        category: 'dining-sets',
        tags: ['rustic', 'wooden table', 'bench', 'farmhouse', 'casual dining'],
        photographer: 'Rumman Amin',
        photographerUrl: 'https://unsplash.com/@rumman',
        source: 'unsplash',
    },

    // Office Furniture
    {
        id: 'office-1',
        url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
        alt: 'Modern home office with wooden desk and ergonomic chair',
        category: 'office',
        tags: ['desk', 'office chair', 'home office', 'ergonomic', 'productivity'],
        photographer: 'Grovemade',
        photographerUrl: 'https://unsplash.com/@grovemade',
        source: 'unsplash',
    },
    {
        id: 'office-2',
        url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80',
        alt: 'Minimalist white desk setup with modern chair',
        category: 'office',
        tags: ['white desk', 'modern chair', 'minimalist', 'clean design'],
        photographer: 'Domenico Loia',
        photographerUrl: 'https://unsplash.com/@domenicoloia',
        source: 'unsplash',
    },
    {
        id: 'office-3',
        url: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=800&q=80',
        alt: 'Ergonomic office chair with mesh back',
        category: 'office-chairs',
        tags: ['office chair', 'ergonomic', 'mesh', 'modern', 'comfortable'],
        photographer: 'Andres Garcia',
        photographerUrl: 'https://unsplash.com/@andresjasso',
        source: 'unsplash',
    },

    // Storage & Shelving
    {
        id: 'storage-1',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        alt: 'Modern wooden bookshelf with open shelving',
        category: 'storage',
        tags: ['bookshelf', 'storage', 'wooden', 'open shelving', 'modern'],
        photographer: 'Kam Idris',
        photographerUrl: 'https://unsplash.com/@kamidris',
        source: 'unsplash',
    },
    {
        id: 'storage-2',
        url: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80',
        alt: 'Minimalist floating shelves with decorative items',
        category: 'storage',
        tags: ['floating shelves', 'minimalist', 'wall storage', 'decorative'],
        photographer: 'Kam Idris',
        photographerUrl: 'https://unsplash.com/@kamidris',
        source: 'unsplash',
    },

    // Accent Chairs & Seating
    {
        id: 'accent-1',
        url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
        alt: 'Modern accent chair in neutral tones',
        category: 'accent-chairs',
        tags: ['accent chair', 'modern', 'neutral', 'comfortable', 'stylish'],
        photographer: 'Kam Idris',
        photographerUrl: 'https://unsplash.com/@kamidris',
        source: 'unsplash',
    },
    {
        id: 'accent-2',
        url: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80',
        alt: 'Velvet accent chair with gold legs',
        category: 'accent-chairs',
        tags: ['velvet chair', 'gold legs', 'luxury', 'elegant', 'statement piece'],
        photographer: 'Hulki Okan Tabak',
        photographerUrl: 'https://unsplash.com/@hulkiokantabak',
        source: 'unsplash',
    },

    // Coffee & Side Tables
    {
        id: 'tables-1',
        url: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80',
        alt: 'Modern round coffee table with marble top',
        category: 'coffee-tables',
        tags: ['coffee table', 'marble top', 'round', 'modern', 'elegant'],
        photographer: 'Kam Idris',
        photographerUrl: 'https://unsplash.com/@kamidris',
        source: 'unsplash',
    },
    {
        id: 'tables-2',
        url: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=800&q=80',
        alt: 'Wooden side table with natural finish',
        category: 'side-tables',
        tags: ['side table', 'wooden', 'natural finish', 'minimalist', 'functional'],
        photographer: 'Kam Idris',
        photographerUrl: 'https://unsplash.com/@kamidris',
        source: 'unsplash',
    },

    // Outdoor Furniture
    {
        id: 'outdoor-1',
        url: 'https://images.unsplash.com/photo-1572045410943-75241b634225?w=800&q=80',
        alt: 'Modern patio set with comfortable seating',
        category: 'outdoor',
        tags: ['patio set', 'outdoor', 'garden', 'modern', 'comfortable'],
        photographer: 'Orren Ellis',
        photographerUrl: 'https://unsplash.com/@orrenellis',
        source: 'unsplash',
    },
    {
        id: 'outdoor-2',
        url: 'https://images.unsplash.com/photo-1617806118233-5cf3b3a5d5e3?w=800&q=80',
        alt: 'Wooden outdoor dining set with benches',
        category: 'outdoor',
        tags: ['outdoor dining', 'wooden', 'benches', 'garden', 'rustic'],
        photographer: 'Out-and-Out',
        photographerUrl: 'https://unsplash.com/@outandout',
        source: 'unsplash',
    },

    // Pexels Images
    {
        id: 'pexels-living-1',
        url: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?w=800&q=80',
        alt: 'Contemporary living room with sectional sofa',
        category: 'sofas',
        tags: ['sectional', 'contemporary', 'living room', 'modern', 'gray'],
        photographer: 'Pixabay',
        source: 'pexels',
    },
    {
        id: 'pexels-bedroom-1',
        url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?w=800&q=80',
        alt: 'Modern bedroom with platform bed',
        category: 'beds',
        tags: ['platform bed', 'modern bedroom', 'minimalist', 'contemporary'],
        photographer: 'Pixabay',
        source: 'pexels',
    },
    {
        id: 'pexels-dining-1',
        url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=800&q=80',
        alt: 'Wooden dining table with modern chairs',
        category: 'dining-sets',
        tags: ['wooden table', 'modern chairs', 'dining room', 'contemporary'],
        photographer: 'Pixabay',
        source: 'pexels',
    },
];

// Helper functions
export const getImagesByCategory = (category: string) => {
    return furnitureImages.filter(img => img.category === category);
};

export const getImagesByTag = (tag: string) => {
    return furnitureImages.filter(img => img.tags.includes(tag));
};

export const getRandomImages = (count: number = 6) => {
    const shuffled = [...furnitureImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

// Categories list
export const furnitureCategories = [
    'sofas',
    'beds',
    'armchairs',
    'dining-sets',
    'office',
    'office-chairs',
    'storage',
    'accent-chairs',
    'coffee-tables',
    'side-tables',
    'living-sets',
    'outdoor',
];

// Popular tags
export const popularTags = [
    'modern',
    'contemporary',
    'wooden',
    'minimalist',
    'luxury',
    'comfortable',
    'elegant',
    'rustic',
    'scandinavian',
    'industrial',
];