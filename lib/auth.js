import React, { useState, useEffect, createContext, useContext } from 'react';
import firebase from './firebase';
import { createUser } from './database';
import Cookies from 'js-cookie';

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

  const handleUser = async userData => {
    if (userData) {
      const user = await formatUser(userData);
      const { token, ...userWithoutToken } = user;
      createUser(user.uid, userWithoutToken);
      setUser(user);
      Cookies.set('comments-provider-auth', true, {
        expires: 1,
      });
      return user;
    } else {
      setUser(false);
      Cookies.remove('comments-provider-auth');
      return false;
    }
  };

  const signIn = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(response => handleUser(response));
  };

  const signOut = () => {
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
    signIn,
    signOut,
  };
}

const formatUser = async user => {
  const token = await user.getIdToken();

  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token,
  };
};
