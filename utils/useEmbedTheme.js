import { useRouter } from 'next/router';

export const useEmbedTheme = () => {
  const { query } = useRouter();

  return query?.theme ?? 'light';
};
