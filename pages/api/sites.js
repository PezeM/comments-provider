import { getAllSites } from '@/lib/database-admin';

export default async (req, res) => {
  const sites = await getAllSites();

  res.status(200).send({ sites });
};
