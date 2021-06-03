import { AuthProvider } from '@/lib/auth';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';
import '@/styles/global.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { Head } from 'next/document';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
