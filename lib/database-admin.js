import { firestore } from './firebase-admin';
import { compareDesc, parseISO } from 'date-fns';

export async function getAllFeedback(siteId) {
  try {
    const data = await firestore.collection('feedback').where('siteId', '==', siteId).get();

    const feedbacks = [];

    data.forEach(doc => {
      feedbacks.push({ id: doc.id, ...doc.data() });
    });

    feedbacks.sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)));

    return { feedbacks };
  } catch (error) {
    return { error };
  }
}

export async function getAllSites() {
  try {
    const data = await firestore.collection('sites').get();
    const sites = [];

    data.forEach(doc => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
  } catch (error) {
    return { error };
  }
}

export async function getUserSites(userId) {
  const data = await firestore.collection('sites').where('authorId', '==', userId).get();
  const sites = [];

  data.forEach(doc => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return { sites };
}

export async function getUserFeedback(userId) {
  const data = await firestore.collection('feedback').where('authorId', '==', userId).get();
  const feedback = [];

  data.forEach(doc => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return { feedback };
}
