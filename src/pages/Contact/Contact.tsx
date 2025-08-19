import React from 'react';
import Container from '../../components/layout/Container';
import { H1, P } from '../../components/ui/Typography';

const Contact: React.FC = () => {
  return (
    <Container>
      <div className="py-12">
        <H1 className="mb-8">Contact Us</H1>
        <P className="text-gray-600 mb-4">
          We'd love to hear from you! Get in touch with our team for any questions or assistance.
        </P>
        <P>
          Email: hello@furniturestore.com
          <br />
          Phone: (555) 123-4567
          <br />
          Address: 123 Furniture Lane, Design District, CA 94103
        </P>
      </div>
    </Container>
  );
};

export default Contact;