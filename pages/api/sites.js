import db from '@/lib/firebase-admin';

export default async (req, res) => {
  const data = await db.collection('sites').get();
  const sites = [];

  data.forEach(doc => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).send(sites);
};
