import React from 'react';
import Container from '../../components/layout/Container';
import { H1, P } from '../../components/ui/Typography';

const Cart: React.FC = () => {
  return (
    <Container>
      <div className="py-12">
        <H1 className="mb-8">Shopping Cart</H1>
        <P className="text-gray-600">
          Your cart is currently empty.
        </P>
        <P className="mt-4">
          Add some beautiful furniture pieces to get started with your order.
        </P>
      </div>
    </Container>
  );
};

export default Cart;