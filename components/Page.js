import React from 'react';
import { NextSeo } from 'next-seo';

export const Page = ({ name, path, children }) => {
  const title = `Comments Provider – ${name}`;
  const url = `https://comments-provider.vercel.app${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </>
  );
};
