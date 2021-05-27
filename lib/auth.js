import React, {useState, useEffect, createContext, useContext} from 'react';
import firebase from './firebase';

const authContext = createContext();

export function AuthProvider({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    console.log("user", user);

    const handleUser = (userData) => {
        if (userData) {
            const user = formatUser(userData);
            setUser(user);
            return user;
        } else {
            setUser(false);
            return false;
        }
    }

    const signIn = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => handleUser(response));
    };

    const signOut = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => setUser(false));
    };

    useEffect(() => {
        const unsubscribe = firebase.auth()
            .onAuthStateChanged(handleUser);

        return () => unsubscribe();
    }, []);

    return {
        user,
        signIn,
        signOut
    };
}

const formatUser = (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL
    }
}