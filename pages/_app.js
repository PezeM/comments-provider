import { AuthProvider } from '@/lib/auth';
import '@/styles/global.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from '@/components/MDXComponents';
import { Chakra } from '@/components/Chakra';

function App({ Component, pageProps }) {
  return (
    <Chakra>
      <AuthProvider>
        <MDXProvider components={MDXComponents}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </MDXProvider>
      </AuthProvider>
    </Chakra>
  );
}

export default App;
