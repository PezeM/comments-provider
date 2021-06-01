const title = 'Comments provider';
const description = 'Comments provider enables adding comments and feedback to your site';

export default {
  title,
  description,
  canonical: 'https://comments-provider.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://comments-provider.vercel.app/',
    site_name: 'Comments provider',
    title,
    description,
    images: [
      {
        url: 'https://comments-provider.vercel.app/android-chrome-512x512.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@PezeM__',
    site: '@PezeM__',
    cardType: 'summary_large_image',
  },
};
