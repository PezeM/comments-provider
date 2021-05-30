import { getAllSites } from '@/lib/database-admin';

export default async (req, res) => {
  const result = await getAllSites();

  if (result.error) {
    res.status(500).json({ error: result.error });
  }

  res.status(200).send({ sites: result.sites });
};
