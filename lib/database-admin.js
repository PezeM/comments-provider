import firebase from './firebase-admin';

export async function getAllFeedback(siteId) {
  const data = await firebase.collection('feedback').where('siteId', '==', siteId).get();

  const feedbacks = [];

  data.forEach(doc => {
    feedbacks.push({ id: doc.id, ...doc.data() });
  });

  return feedbacks;
}

export async function getAllSites() {
  const data = await firebase.collection('sites').get();
  const sites = [];

  data.forEach(doc => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return sites;
}
