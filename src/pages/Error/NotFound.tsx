import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/layout/Container';
import { H1, P } from '../../components/ui/Typography';
import Button from '../../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <Container className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <H1 className="text-6xl font-bold text-gray-900 mb-4">404</H1>
        <P className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </P>
        <div className="space-x-4">
          <Link to="/">
            <Button variant="primary" size="lg">
              Go Home
            </Button>
          </Link>
          <Link to="/shop">
            <Button variant="secondary" size="lg">
              Browse Shop
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;