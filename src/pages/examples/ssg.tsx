import SEO from '@/components/SEO';
import { GetStaticProps } from 'next';
import React from 'react';

interface SSGProps {
  siteTitle: string;
  siteDescription: string;
}

const SSG: React.FC<SSGProps> = ({ siteTitle, siteDescription }: SSGProps) => (
  <>
    <SEO title={siteTitle} description={siteDescription} indexPage />
    {siteTitle && <h1>{siteTitle}</h1>}
    {siteDescription && <p>{`Description: ${siteDescription}`}</p>}
  </>
);

function sleep(timeout: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  const siteTitle = 'Static Site Generation';
  const siteDescription = 'This is an example of static site generation.';
  await sleep(2000);
  return {
    props: {
      siteTitle,
      siteDescription,
    },
  };
};

export default SSG;
