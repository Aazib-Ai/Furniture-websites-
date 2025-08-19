import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { cn } from '../../utils/helpers/cn';
import Container from './Container';
import Flex from './Flex';
import Badge from '../ui/Badge';

interface HeaderProps {
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'COLLECTIONS', href: '/collections' },
    { name: 'SHOP', href: '/shop' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <Container>
        <Flex className="items-center justify-between h-24 text-white">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-wider">
              Arkwood <span className="font-normal">FURNITURE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-opacity-80',
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-white text-opacity-90'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <Flex className="items-center space-x-5">
            <button
              className="p-2 transition-colors hover:text-opacity-80"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 transition-colors hover:text-opacity-80"
              aria-label="User profile"
            >
              <User className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 transition-colors hover:text-opacity-80"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="primary"
                  size="sm"
                  className="absolute -top-1 -right-1"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </Flex>
        </Flex>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-neutral-900 bg-opacity-90 backdrop-blur-sm"
          >
            <Container className="py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'text-center text-lg font-medium uppercase tracking-widest transition-colors hover:text-opacity-80 py-2',
                      isActive(item.href)
                        ? 'text-white'
                        : 'text-white text-opacity-90'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;