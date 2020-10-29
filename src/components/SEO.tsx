import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  image?: string | null;
  useSuffix?: boolean;
  indexPage?: boolean;
}

interface SEODefaultProps {
  image: string | null;
  useSuffix: boolean;
  indexPage: boolean;
}

const defaultProps: SEODefaultProps = {
  image: null,
  useSuffix: true,
  indexPage: true,
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  useSuffix,
  indexPage,
}: SEOProps) => {
  const pageTitle = `${title}${
    useSuffix ? ` | ${process.env.NEXT_PUBLIC_SITE_NAME}` : ''
  }`;
  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`
    : null;

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="description" content={description} />
      {pageImage && <meta name="image" content={pageImage} />}

      {!indexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#FFF" />
      <meta name="msapplication-TileColor" content="#FFF" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1152" />
      <meta property="og:image:height" content="640" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1152" />
      <meta name="twitter:image:height" content="640" />
    </Head>
  );
};

SEO.defaultProps = defaultProps;

export default SEO;
