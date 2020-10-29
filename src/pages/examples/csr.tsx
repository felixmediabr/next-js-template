import SEO from '@/components/SEO';
import React, { useEffect, useState } from 'react';

function sleep(timeout: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const ClientSideRendering: React.FC = () => {
  const [siteTitle, setSiteTitle] = useState<string>('Wait...');
  const [siteDescription, setSiteDescription] = useState<string>('Wait..');
  const [indexPage, setIndexPage] = useState(false);

  useEffect(() => {
    sleep(2000).then(() => {
      setSiteTitle('Client Side Rendering');
      setSiteDescription('This is an example of client side rendering.');
      setIndexPage(true);
    });
  }, []);

  return (
    <>
      <SEO
        title={siteTitle}
        description={siteDescription}
        indexPage={indexPage}
      />
      {siteTitle && <h1>{siteTitle}</h1>}
      {siteDescription && <p>{`Description: ${siteDescription}`}</p>}
      <p>If you disable JavaScript, only this line will appear.</p>
    </>
  );
};

export default ClientSideRendering;
