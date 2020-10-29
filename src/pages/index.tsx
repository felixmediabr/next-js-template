import React from 'react';
import { Title } from '@/styles/pages/Home';
import SEO from '@/components/SEO';

const Home: React.FC = () => (
  <div>
    <SEO
      title="Hello World Page"
      description="This is a sample page with Next.js"
    />
    <Title>Hello, World!</Title>
  </div>
);

export default Home;
