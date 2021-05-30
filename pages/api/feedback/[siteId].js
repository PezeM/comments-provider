import { getAllFeedback } from '@/lib/database-admin';

export default async (req, res) => {
  const siteId = req.query.siteId;
  const feedback = await getAllFeedback(siteId);

  res.status(200).send({ feedback });
};
