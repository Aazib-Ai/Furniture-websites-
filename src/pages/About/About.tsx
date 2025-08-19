import React from 'react';
import Container from '../../components/layout/Container';
import { H1, P } from '../../components/ui/Typography';

const About: React.FC = () => {
  return (
    <Container>
      <div className="py-12">
        <H1 className="mb-8">About Us</H1>
        <P className="text-gray-600 mb-4">
          We are passionate about creating beautiful, sustainable furniture that brings comfort and style to your home.
        </P>
        <P>
          Our journey began with a simple belief: that great furniture should be both beautiful and functional,
          crafted with care and built to last generations.
        </P>
      </div>
    </Container>
  );
};

export default About;