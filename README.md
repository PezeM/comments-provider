## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To setup environment variables on local machine, create `.env.local` file in the main directory,
and paste correct variables.

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_LOGFLARE_KEY=
NEXT_PUBLIC_LOGFLARE_STREAM=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_HOME_SITE_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Deployment documentation](https://nextjs.org/docs/deployment) for more details.

## TODO

- [ ] Dark theme
- [ ] Color mode manager for SSR
- [ ] Enable nextjs built in eslint
- [ ] Enable webpack5