import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/layout/Container';
import { H1, P } from '../../components/ui/Typography';

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <Container>
      <div className="py-12">
        <H1 className="capitalize mb-8">
          {category?.replace('-', ' ') || 'Category'}
        </H1>
        <P className="text-gray-600">
          Browse our collection of {category?.replace('-', ' ')} furniture.
          Find the perfect pieces to complete your space.
        </P>
      </div>
    </Container>
  );
};

export default Category;