import { getAllFeedback } from '@/lib/database-admin';

export default async (req, res) => {
  const [siteId, route] = req.query.site;
  const result = await getAllFeedback(siteId, route);

  if (result.error) {
    res.status(500).json({ error: result.error });
  }

  res.status(200).send({ feedback: result.feedbacks });
};
