import { createIcon } from '@chakra-ui/react';

export const LogoIcon = createIcon({
  displayName: 'LogoIcon',
  defaultProps: {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
  },
  path: (
    <path
      stroke="currentColor"
      fill="currentColor"
      d="M8 10h8M8 14h4M12 22c5.5228 0 10-4.4772 10-10 0-5.5229-4.4772-10-10-10C6.4771 2 2 6.4771 2 12c0 1.8214.487 3.5291 1.3378 5L2.5 21.5l4.5-.8378C8.4709 21.513 10.1786 22 12 22z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

export const GithubIcon = createIcon({
  displayName: 'GithubIcon',
  defaultProps: {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
  },
  path: (
    <path
      d="M16 22.0268v-2.87a3.3698 3.3698 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.4402 5.4402 0 00-1.5-3.75 5.0704 5.0704 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48a5.07 5.07 0 00-.09 3.77 5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.3704 3.3704 0 00-.94 2.58v2.87M9 20.0267c-3 .9732-5.5 0-7-3"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  ),
});

export const GoogleIcon = createIcon({
  displayName: 'GoogleIcon',
  defaultProps: {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
  },
  path: [
    <path
      d="M15.5475 8.3033C14.6407 7.4936 13.4329 7 12.1089 7 9.2869 7 7 9.239 7 12s2.287 5 5.1089 5C15.5781 17 16.86 14.4296 17 12.4167h-4.159"
      stroke="currentColor"
      stroke-width="1.5"
    />,
    <path
      d="M12 22c5.5228 0 10-4.4772 10-10 0-5.5229-4.4772-10-10-10C6.4771 2 2 6.4771 2 12c0 5.5228 4.4771 10 10 10z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />,
  ],
});
