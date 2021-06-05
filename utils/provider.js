export const getUserProviderLink = (provider, userName, email) => {
  provider = provider.toLowerCase();

  switch (provider) {
    case 'github.com':
      return `https://github.com/${userName}`;
    case 'google.com':
      return `mailto:${email}`;
    default:
      return '/';
  }
};
