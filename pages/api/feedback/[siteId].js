import { getAllFeedback } from '@/lib/database-admin';

export default async (req, res) => {
  const siteId = req.query.siteId;
  const result = await getAllFeedback(siteId);

  if (result.error) {
    res.status(500).json({ error: result.error });
  }

  res.status(200).send({ feedback: result.feedbacks });
};
