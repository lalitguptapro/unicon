// components/SEO.tsx

import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, author, ogImage, ogType }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogType && <meta property="og:type" content={ogType} />}
      <meta property="og:locale" content="en_US" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
