import SEO from '@/components/SEO';
import { GetServerSideProps } from 'next';
import React from 'react';

interface SiteProps {
  siteTitle: string;
  siteDescription: string;
}

const ServerSideRendering: React.FC<SiteProps> = ({
  siteTitle,
  siteDescription,
}: SiteProps) => (
  <>
    <SEO title={siteTitle} description={siteDescription} indexPage />
    {siteTitle && <h1>{siteTitle}</h1>}
    {siteDescription && <p>{`Description: ${siteDescription}`}</p>}
    <p>If you disable JavaScript, no problem!</p>
  </>
);

function sleep(timeout: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const getServerSideProps: GetServerSideProps<SiteProps> = async () => {
  const siteTitle = 'Server side rendering';
  const siteDescription = 'This is an example of server side rendering.';

  await sleep(2000);

  return {
    props: {
      siteTitle,
      siteDescription,
    },
  };
};

export default ServerSideRendering;
