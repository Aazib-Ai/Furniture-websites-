import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../utils/helpers/cn';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
  homeLabel?: string;
  showHome?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items = [],
  separator = <ChevronRight className="w-4 h-4" />,
  className,
  homeLabel = 'Home',
  showHome = true,
}) => {
  const location = useLocation();

  // Generate breadcrumb items from current path if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items.length > 0) return items;

    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbs: BreadcrumbItem[] = [];

    if (showHome) {
      breadcrumbs.push({ label: homeLabel, href: '/' });
    }

    pathnames.forEach((value, index) => {
      const href = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = value
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({ label, href });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center space-x-2 text-sm', className)}
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="text-gray-400 mx-2">{separator}</span>
              )}
              
              {isLast || !item.href ? (
                <span
                  className="font-medium text-gray-900"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  {index === 0 && showHome && !items.length ? (
                    <span className="flex items-center space-x-1">
                      <Home className="w-4 h-4" />
                      <span>{item.label}</span>
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

// Helper component for specific page breadcrumbs
export const ProductBreadcrumb: React.FC<{
  productName: string;
  category?: string;
  categoryHref?: string;
}> = ({ productName, category, categoryHref }) => {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
  ];

  if (category) {
    items.push({
      label: category,
      href: categoryHref || `/products?category=${category.toLowerCase()}`,
    });
  }

  items.push({ label: productName });

  return <Breadcrumb items={items} />;
};

export default Breadcrumb;