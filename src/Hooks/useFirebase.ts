import firebaseInit from "../firebase/firebaseInit";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    User,
    onAuthStateChanged,
    getIdToken,
    createUserWithEmailAndPassword, 
    updateProfile,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";

interface Result{
    user: User
}

interface Firebase{
    loginWithGoolge: () => Promise<Result>;
    signUpWithEmail: (email: string, passwoard: string) => Promise<Result>;
    loginWithEmail: (email: string, passwoard: string) => Promise<Result>;
    addUserName: (name: string) => void;
    logOut(): void;
    user: User | null | undefined;
    loading: boolean;
}


firebaseInit();
const useFirebase = (): Firebase => {
    const [user, setUser] = useState<User | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
  
    //log in with google
    function loginWithGoolge() {
        return signInWithPopup(auth, provider);
    }
    //register with email
    function signUpWithEmail(email:string, passwoard:string) {
        return createUserWithEmailAndPassword(auth, email, passwoard);
    }
    //add user name
    function addUserName(name:string) {
        updateProfile(auth.currentUser!, {
            displayName: name
        })
    }
    //login with email
    function loginWithEmail(email:string, passwoard:string) {
        return signInWithEmailAndPassword(auth, email, passwoard)
    }
    //signOut
    function logOut() {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(token => {
                        localStorage.setItem(token, `Bearrar ${token}`);
                    })
            }
            else {
                setUser(null);
            }
            setLoading(false);
        })
    },[])

    return {
        loginWithGoolge,
        signUpWithEmail,
        loginWithEmail,
        addUserName,
        logOut,
        user,
        loading
    }
}

export default useFirebase