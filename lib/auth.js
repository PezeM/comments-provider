import React, { useState, useEffect, createContext, useContext } from 'react';
import firebase from './firebase';
import { createUser } from './database';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleUser = async userData => {
    if (userData) {
      const user = await formatUser(userData);
      const { token, ...userWithoutToken } = user;
      await createUser(user.uid, userWithoutToken);
      setUser(user);
      Cookies.set('comments-provider-auth', true, {
        expires: 1,
      });
      return user;
    } else {
      Cookies.remove('comments-provider-auth');
      setUser(false);
      return false;
    }
  };

  const signInWithGithub = () => {
    router.push('/dashboard');

    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(response => handleUser(response));
  };

  const signInWithGoogle = () => {
    router.push('/dashboard');

    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(response => handleUser(response));
  };

  const signOut = () => {
    router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => setUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signInWithGoogle,
    signOut,
  };
}

const getStripeRole = async () => {
  await firebase.auth().currentUser.getIdToken(true);
  const decodedToken = await firebase.auth().currentUser.getIdTokenResult();

  return decodedToken.claims.stripeRole ?? 'free';
};

const formatUser = async user => {
  // Sometimes the user is user and sometimes user.user
  user = user.user ? user.user : user;
  const token = await user.getIdToken();

  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token,
    stripeRole: await getStripeRole(),
  };
};
