import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

const useFirebase = () => {
    const [user, setUsers] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            });
    }

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            }
            else {
                setUsers({})
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase; 