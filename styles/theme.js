import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 700,
};

const fonts = {
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const icons = {
  logo: {},
};

export const theme = extendTheme({
  colors,
  fontWeights,
  fonts,
  icons,
});
