import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface AnimatedRouteProps {
  children: React.ReactNode;
}

const AnimatedRoute: React.FC<AnimatedRouteProps> = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;