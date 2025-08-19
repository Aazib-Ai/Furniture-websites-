import { products } from './products';

export const orders = [
    {
        orderId: 'ORD001',
        userId: 1,
        orderDate: '2023-10-15T10:30:00Z',
        status: 'Delivered',
        total: 730,
        items: [
            {
                productId: 1,
                quantity: 1,
                price: 450,
                product: products.find(p => p.id === 1),
            },
            {
                productId: 11,
                quantity: 1,
                price: 280,
                product: products.find(p => p.id === 11),
            },
        ],
    },
    {
        orderId: 'ORD002',
        userId: 2,
        orderDate: '2023-11-20T14:00:00Z',
        status: 'Shipped',
        total: 350,
        items: [
            {
                productId: 12,
                quantity: 1,
                price: 350,
                product: products.find(p => p.id === 12),
            },
        ],
    },
    {
        orderId: 'ORD003',
        userId: 1,
        orderDate: '2023-12-05T18:45:00Z',
        status: 'Processing',
        total: 900,
        items: [
            {
                productId: 35,
                quantity: 1,
                price: 900,
                product: products.find(p => p.id === 35),
            },
        ],
    },
    {
        orderId: 'ORD004',
        userId: 3,
        orderDate: '2024-01-10T09:15:00Z',
        status: 'Delivered',
        total: 550,
        items: [
            {
                productId: 46,
                quantity: 1,
                price: 550,
                product: products.find(p => p.id === 46),
            },
        ],
    },
    {
        orderId: 'ORD005',
        userId: 2,
        orderDate: '2024-02-02T11:00:00Z',
        status: 'Pending',
        total: 120,
        items: [
            {
                productId: 51,
                quantity: 1,
                price: 120,
                product: products.find(p => p.id === 51),
            },
        ],
    },
];