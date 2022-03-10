import firebaseInit from "./firebaseInit";
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

export interface FirebaseSchema{
    loginWithGoolge: () => Promise<Result>;
    signUpWithEmail: (email: string, passwoard: string) => Promise<Result>;
    loginWithEmail: (email: string, passwoard: string) => Promise<Result>;
    addUserName: (name: string) => void;
    logOut(): void;
    user: User | null | undefined;
    loading: boolean;
    createUser(data: DbUser): void;
    userFromDb: DbUser | null;
}


firebaseInit();
const Firebase = (): FirebaseSchema => {
    const [userFromDb, setUserFromDb] = useState<DbUser | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>();
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
            .then(() => {
            
            });
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

    function createUser(data: DbUser) {     
        fetch(" https://apartment-sales.herokuapp.com/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setUserFromDb(data);
            })
    };

    function getUser(email: string) {
        fetch(` https://apartment-sales.herokuapp.com/users/${email}`)
            .then(res => res.json())
            .then(data => {
                setUserFromDb(data);
                setLoading(false);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(token => {
                        localStorage.setItem(token, `Bearrar ${token}`);
                        getUser(user.email!);
                    });
            }
            else {
                setUser(null);
                setLoading(false);
            }
        })
    },[])

    return {
        loginWithGoolge,
        signUpWithEmail,
        loginWithEmail,
        addUserName,
        logOut,
        user,
        loading,
        createUser,
        userFromDb,
    }
}

export default Firebase