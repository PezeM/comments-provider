import { getUserSites } from '@/lib/database-admin';
import { auth } from '@/lib/firebase-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const sites = await getUserSites(uid);

    res.status(200).send(sites);
  } catch (error) {
    res.status(500).json({ error });
  }
};
