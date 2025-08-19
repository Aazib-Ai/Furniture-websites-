import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Container from './Container';
import Flex from './Flex';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Shipping', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  return (
    <footer className={className}>
      <div className="bg-gray-50 border-t border-gray-200">
        <Container>
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand */}
              <div>
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">FurniCraft</span>
                </Link>
                <p className="text-sm text-gray-600 mb-4">
                  Crafting beautiful furniture for modern living spaces. Quality,
                  comfort, and style in every piece.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Support
                </h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      123 Furniture Street
                      <br />
                      Design District, CA 94103
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a
                      href="tel:+1234567890"
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a
                      href="mailto:hello@furnicraft.com"
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      hello@furnicraft.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t border-gray-200">
        <Container>
          <Flex className="items-center justify-between py-4">
            <p className="text-sm text-gray-600">
              © {currentYear} FurniCraft. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/40x25/6e4424/ffffff?text=VISA"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://via.placeholder.com/40x25/6e4424/ffffff?text=MC"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://via.placeholder.com/40x25/6e4424/ffffff?text=AMEX"
                alt="American Express"
                className="h-6"
              />
            </div>
          </Flex>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;