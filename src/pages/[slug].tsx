import React from 'react';
import { useRouter } from 'next/router';

const Test: React.FC = () => {
  const { slug } = useRouter().query;
  const message = `Hello, ${slug}!`;
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Test;
