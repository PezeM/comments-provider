import { AuthProvider } from '@/lib/auth';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';
import '@/styles/global.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from '@/components/MDXComponents';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <MDXProvider components={MDXComponents}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </MDXProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
