import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from '../components/layout';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Category from '../pages/Shop/Category';
import Product from '../pages/Product/Product';
import Cart from '../pages/Cart/Cart';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/Error/NotFound';
import AnimatedRoute from '../components/common/AnimatedRoute';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <AnimatedRoute>
              <Home />
            </AnimatedRoute>
          } />
          <Route path="shop" element={
            <AnimatedRoute>
              <Shop />
            </AnimatedRoute>
          } />
          <Route path="shop/:category" element={
            <AnimatedRoute>
              <Category />
            </AnimatedRoute>
          } />
          <Route path="product/:id" element={
            <AnimatedRoute>
              <Product />
            </AnimatedRoute>
          } />
          <Route path="cart" element={
            <AnimatedRoute>
              <Cart />
            </AnimatedRoute>
          } />
          <Route path="about" element={
            <AnimatedRoute>
              <About />
            </AnimatedRoute>
          } />
          <Route path="contact" element={
            <AnimatedRoute>
              <Contact />
            </AnimatedRoute>
          } />
          <Route path="*" element={
            <AnimatedRoute>
              <NotFound />
            </AnimatedRoute>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;