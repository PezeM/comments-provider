import { firestore } from './firebase-admin';
import { compareDesc, parseISO } from 'date-fns';

export async function getAllFeedback(siteId, route) {
  try {
    let data = firestore
      .collection('feedback')
      .where('siteId', '==', siteId)
      .where('status', '==', 'active');

    if (route) {
      data = data.where('route', '==', route);
    }

    data = await data.get();
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

export async function getSite(siteId) {
  try {
    const data = await firestore.collection('sites').doc(siteId).get();
    const site = { id: data.id, ...data.data() };

    return { site };
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

    sites.sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)));

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

  sites.sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)));

  return { sites };
}

export async function getUserFeedback(userId) {
  // Firebase clause != is not supported xD

  const data = await firestore
    .collection('feedback')
    .where('authorId', '==', userId)
    .where('status', 'in', ['pending', 'active'])
    .get();
  const feedback = [];

  data.forEach(doc => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return { feedback };
}

export async function getAllFeedbackForSites(uid) {
  const { sites } = await getUserSites(uid);

  if (!sites.length) {
    return { feedback: [] };
  }

  const siteIds = sites.map(site => site.id);
  const data = await firestore
    .collection('feedback')
    .where('siteId', 'in', siteIds)
    .get();

  const feedback = [];

  data.forEach(doc => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return { feedback };
}
