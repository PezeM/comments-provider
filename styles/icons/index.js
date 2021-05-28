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
